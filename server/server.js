var express = require("express"),
  bodyParser = require("body-parser"),
  cookieParser = require("cookie-parser"),
  mongoose = require("mongoose"),
  config = require("./config/config").get(process.env.NODE_ENV),
  app = express();

mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE);

const { User } = require("./models/user");
const { Event } = require("./models/event");
const { Member } = require("./models/member");
const { auth } = require("./middleware/auth");

app.use(bodyParser.json());
app.use(cookieParser());

// +++++++++++ GET  +++++++++++++++++++++

app.get("/ieee/getEvent", (req, res) => {
  let id = req.query.id;

  Event.findById(id, (err, doc) => {
    if (err) return res.status(400).send(err);
    res.send(doc);
  });
});

// All Events
app.get("/ieee/events", (req, res) => {
  let skip = parseInt(req.query.skip);
  let limit = parseInt(req.query.limit);
  let order = req.query.order;

  Event.find()
    .skip(skip)
    .sort({ _id: order })
    .limit(limit)
    .exec((err, doc) => {
      if (err) return res.status(400).send(err);
      res.send(doc);
    });
});

// Auth
app.get("/ieee/auth", auth, (req, res) => {
  res.json({
    isAuth: true,
    id: req.user._id,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname
  });
});

// User

app.get("/ieee/users", (req, res) => {
  User.find({}, (err, users) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(users);
  });
});

// LogOut
app.get("/ieee/logout", auth, (req, res) => {
  req.user.deleteToken(req.token, (err, user) => {
    if (err) {
      return res.status(400).send(err);
    }
    res.sendStatus(200);
  });
});

// Users
app.get("/ieee/working-team", (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      return res.status(400).send(err);
    }
    res.status(200).send(users);
  });
});

//++++++++++++ event +++++++++++++++++++++
// New Event
app.post("/ieee/events", (req, res) => {
  const event = new Event(req.body);

  event.save((err, doc) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({
      post: true,
      eventId: doc._id
    });
  });
});

// Register
app.post("/ieee/add-admin", (req, res) => {
  const user = new User(req.body);

  user.save((err, doc) => {
    if (err) return res.json({ success: false });
    res.status(200).json({
      success: true,
      user: doc
    });
  });
});

// Login
app.post("/ieee/login", (req, res) => {
  User.findOne({ "email": req.body.email }, (err, user) => {
    if (!user)
      return res.json({
        isAuth: false,
        message: "Auth failed, email not found!"
      });

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          isAuth: false,
          message: "Wrong Password"
        });

      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res.cookie("auth", user.token).json({
          isAuth: true,
          id: user._id,
          email: user.email
        });
      });
    });
  });
});

//++++++++++++ UPDATE +++++++++++++++++++
// Update Event
app.post("/ieee/event_update", (req, res) => {
  Event.findByIdAndUpdate(req.body._id, req.body, { new: true }, (err, doc) => {
    if (err) return res.status(400).send(err);
    res.json({
      success: true,
      doc
    });
  });
});

//++++++++++ DELETE +++++++++++++++++++++
// Delete Event
app.delete("/ieee/event_delete", (req, res) => {
  let id = req.query.id;

  Event.findByIdAndRemove(id, (err, doc) => {
    if (err) return res.status(400).send(err);
    res.json(true);
  });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("SERVER IS RUNNING!!!");
});
