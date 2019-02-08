var bcrypt          = require('bcrypt'),
    jwt             = require('jsonwebtoken'),
    mongoose        = require('mongoose'),
    config          = require('./../config/config').get(process.env.NODE_ENV),
    SALT_I          = 10;


const userSchema    = mongoose.Schema({
    email       : {
        type        : String,
        required    : true,
        trim        : true,
        unique      : 1
    },
    password    : {
        type        : String,
        required    : true,
        minlength   : 6
    },
    name        : {
        type        : String,
        maxlength   : 100
    },
    lastname    : {
        type        : String,
        maxlength   : 100
    },
    token       : {
        type        : String
    }
})


const User  = mongoose.model('User',userSchema)

module.exports  = { User }