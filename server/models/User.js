//dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name : {
    type: String,
    required: true
  },
  email : {
    type: String,
    unique: true,
    lowercase: true,
    required: true
  },
  password : {
    type: String,
    required: true
  },
  dateOfBecomingMember: { //dont think i need, but lets keep for now
    type: Date,
    default: Date.now //maybe remove?? or will it work?? change later
  },
  profileImg:{
    type: String
  },
  profileDescription:{
    type: String
  },
  books:{ //array of books of type string, then we can look at book data to see if they r an author or contributor to separate the books
    type: [String]
  }
});

module.exports = User = mongoose.model('users', UserSchema);
