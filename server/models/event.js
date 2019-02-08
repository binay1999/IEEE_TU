var mongoose        = require('mongoose'),
    config          = require('./../config/config').get(process.env.NODE_ENV),

const eventSchema    = mongoose.Schema({
    title        : {
        type        : String,
        required    : true,
        maxlength   : 100
    },
    description  : {
        type        : String,
        required    : true,
        maxlength   : 100
    },
    image        : {
        type        : String,
        required    : true,
        maxlength   : 13
    },
    date         : {
        type        : Number,
        required    : true
    }
})

const Event  = mongoose.model('Event',eventSchema)

module.exports  = { Event }