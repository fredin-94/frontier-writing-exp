//dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
    type: [{
      title: String,
      content: String,
      collaborators: [String]
    }]
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
  language:{
    type: String
    //required: true
  },
  creator:{
    type: String,
    required: true
  },
  genre:{
    type: [String]
  }
});

module.exports = Book = mongoose.model('books', BookSchema);
