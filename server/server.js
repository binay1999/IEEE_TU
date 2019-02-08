var express         = require('express'),
    bodyParser      = require('body-parser'),
    cookieParser    = require('cookie-parser'),
    mongoose        = require('mongoose'),
    config          = require('./config/config').get(process.env.NODE_ENV),
    app             = express();

mongoose.Promise    = global.Promise;
mongoose.connect(config.DATABASE);

app.use(bodyParser.json());
app.use(cookieParser());





const   port = process.env.PORT || 3001;
app.listen(port,()=>{
    console.log('SERVER IS RUNNING!!!')
})