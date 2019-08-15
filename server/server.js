//dependencies
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//initialization
const app = express();

//middleware setup
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

//connect to mongo
const db = require("./config/keys.js").mongoURI;

mongoose.connect(
  db, {useNewUrlParser: true}
)
.then(()=> console.log("Connected to mongoDB!"))
.catch((err)=> console.log(err));

//set port
const port = process.env.PORT || 5000;

app.listen(
  port, ()=> console.log(`Server running on port ${port}.`)
);
