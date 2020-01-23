//dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

//const redis = require('redis'), redisClient = redis.createClient({host: '127.0.0.1'});

//const cors = require('cors');
//const http = require('http');
const morgan = require('morgan');

//local
const users = require('./routes/api/users');
const books = require('./routes/api/books');

//initialization
const app = express();

//middleware setup
app.use(morgan('combined')); //middleware to log requests to console (for debugging)
//app.use(cors()); //accept requests from anywhere (change it later to only accept requests from our website, or remove this cors )
app.use(bodyParser.urlencoded({
  extended: true  //to allow nested objects 
}));
app.use(bodyParser.json()); //parse any request as json

//connect to mongoDB
const db = require('./config/keys.js').mongoURI;
mongoose.connect(
  db, {useNewUrlParser: true}
)
.then(()=> console.log("Connected to mongoDB!"))
.catch((err)=> console.log(err));

//passport setup as middleware
app.use(passport.initialize());
require("./config/passport.js")(passport);

//routes
app.use('/api/users', users);
app.use('/api/books', books);

//set port
const port = process.env.PORT || 5000;

app.listen(
  port, ()=> console.log(`Server running on port ${port}.`)
);

module.exports = {
  //redisClient : redisClient
}