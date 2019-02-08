var mongoose = require("mongoose"),
  config = require("./../config/config").get(process.env.NODE_ENV);

const memberSchema = mongoose.Schema({
  year: {
    type: Number,
    required: true
  },
  position: {
    type: String,
    required: true,
    minlength: 6
  },
  fullname: {
    type: String,
    required: true,
    maxlength: 100
  },
  contact: {
    type: {
      email: {
        type: String,
        required: true,
        trim: true
      },
      email: {
        type: Number,
        required: true,
        maxlength: 13
      },
      linkedin: {
        type: String
      }
    }
  }
});

const Member = mongoose.model("Member", memberSchema);

module.exports = { Member };
