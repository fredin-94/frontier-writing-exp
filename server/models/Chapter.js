//dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//schema
const ChapterSchema = new Schema({
  title : {
    type: String,
    required: true
  },
  content : {
    type: String,
  },
  contributors : {
      type: [String] //string array type data
  }
});

module.exports = ChapterSchema; //?? to make other schema use it
