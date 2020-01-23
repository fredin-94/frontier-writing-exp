//dependencies
const mongoose = require('mongoose');
const JwtStrategy = require('passport-jwt').Strategy; //decide how to extract the token
const ExtractJwt = require('passport-jwt').ExtractJwt;

//local:
const User = mongoose.model("users");
const keys = require('../config/keys');

//opts
const options = {}; //get the token from the auth header (as bearer) using secret key
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.secretOrKey;

//export passport
module.exports = (passport)=>{
  passport.use(
    new JwtStrategy(options, (jwt_payload, done)=>{ //use the decoded jwt to find the user in the db 
      User.findById(jwt_payload.id)
      .then((user)=>{
        if(user){
          return done(null, user);
        }
        return done(null, false);
      })
      .catch((err)=>{
        console.log(err);
      });
    })
  );
};
