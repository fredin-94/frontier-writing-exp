//dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChapterSchema = require('./Chapter');

mongoose.set('useFindAndModify', false);
//schema
const BookSchema = new Schema({
  title : {
    type: String,
    required: true
  },
  authors : {
    type: [String],
    required: true
  },
  collaborators:{
    type: [String]
  },
  chapters : {
    type: [ChapterSchema]
  },
  lastEdited: {
    type: Date,
    default: Date.now
  },
  imgUrl :{
      type: String
  },
  summary:{
      type: String
  }, 
  pageCount:{ //i dont rly know how to get this but might add it later
      type: Number
  }, 
  /* bookId:{ //can use built in mongodb one, just remember to send it back to user
      type: String,
      required: true
  }, */
  language:{
    type: String,
    required: true
  },
  creator:{
    type: String,
    required: true
  }
});

//make it seeable
module.exports = Book = mongoose.model('books', BookSchema);
