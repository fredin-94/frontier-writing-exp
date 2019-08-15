//dependencies
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt.js");
const jwt = require("jsonwebtoken");
//local dependencies
const keys = require("../../config/keys.js");
//input validation
const validateUserRegisterInput = require("../../validation/register.js");
const validateUserLoginInput = require("../../validation/login.js");
//models
const User = require("../../models/User.js");

//@ POST api/users/register
router.post("/register", (res, req)=>{
  //check if valid input
  const {errors, isValid} = validateUserRegisterInput(req.body);

  if(!isValid){
    return res.status(400).json(errors);
  }
  //if valid, check if user already exists
  User.findOne({ email: req.body.email })
  .then((user)=>{
    if(user){
      return res.status(400).json({email: "Email already exists"});
    }else{
      const newUser = new User({
        name : req.body.name,
        email : req.body.email,
        password: req.body.password
      });

      //if new user, hash PW, send request
      bcrypt.genSalt(10, (err, salt)=>{ //salt to add noise data to PW
        bcrypt.hash(newUser.password, salt, (err, hash)=>{
          if(err){
            throw err;
          }

          newUser.password = hash;

          newUser.save()
          .then((user)=>{
            res.json(user)
          })
          .catch((err)=>{
            console.log(err);
          });

        }); //hash end
      }); //gensalt end

    } //else end
  }); //find user end

});
