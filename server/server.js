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
// LogOut
app.get("/ieee/events", (req, res) => {
  let id = req.query.id;

  Event.findById(id, (err, doc) => {
    if (err) {
      return res.status(400).send(err);
    }
    res.send(doc);
  });
});

app.get("/ieee/logout", auth, (req, res) => {
  req.user.deleteToken(req.token, (err, user) => {
    if (err) {
      return res.status(400).send(err);
    }
    res.sendStatus(200);
  });
});

app.get("/ieee/users", (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      return res.status(400).send(err);
    }
    res.status(200).send(users);
  });
});
//++++++++++++ POST +++++++++++++++++++++
// Register
app.post("/ieee/register", (req, res) => {
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
app.post("//ieee/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
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

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("SERVER IS RUNNING!!!");
});
