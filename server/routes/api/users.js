//dependencies
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//the redis server has to be running for this to work: 
//(by opening bash in the redis folder in d/programs and running src/redis-server)
//const redis = require('redis'), redisClient = redis.createClient({host: '127.0.0.1'});

//local dependencies
const keys = require("../../config/keys.js");
//input validation
const validateUserRegisterInput = require("../../validation/register.js");
const validateUserLoginInput = require("../../validation/login.js");
//models
const User = require("../../models/User.js");

router.get('/', (req,res,next)=>{ //get all users
  User.find((err, data)=>{
    if(err){
      return res.status(400).json("Error in request");
    }

    res.status(200).json(data);
  });
});

//@ POST api/users/register
router.post("/register", (req, res, next)=>{
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

      //if new user, hash/encrypt PW, send request
      bcrypt.genSalt(10, (err, salt)=>{ //salt to add noise data to PW
        bcrypt.hash(newUser.password, salt, (err, hash)=>{
          if(err){
            throw err;
          }

          newUser.password = hash;

          newUser.save()
          .then((user)=>{
            res.json(user);
            console.log("Successfully added new user");
          })
          .catch((err)=>{
            console.log(err);
          });

        }); //hash end
      }); //gensalt end

    } //else end
  })
  .catch((err)=>{ //added now, idk if we need?
    return next(err);
  }); //find user end

});

//@route POST api/users/login - should this be a post at all?
router.post("/login", (req,res, next)=>{
  const {errors, isValid} = validateUserLoginInput(req.body);

  if(!isValid){
    return res.status(400).json(errors); //400 = bad request
  }

  if(req.headers.authorization){ //(for redis) if it has a jwt token? maybe big A?
    //return getAuthTokenId(req,res);
  }else{ //if not then create the token, set the token in the db and return the session give user a token and maybe id? 324

  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({email})
  .then((user)=>{
    if(!user){
      return res.status(400).json({emailnotfound: "Email Not Found"});
    }

    bcrypt.compare(password, user.password) //do the encrypter pws match
    .then((isMatch)=>{
      if(isMatch){
        const payload = {
          id: user.id,
          name: user.name
        };

        jwt.sign(payload, keys.secretOrKey, {expiresIn: 31556926}, (err, token)=>{ //set up the token, send it back to client
          res.json({
            success: true,
            token: "Bearer " + token
          });

          //setToken(token, payload.id); //maybe move this, maybe need to return it 
        });

      }else{
        return res.status(400).json({passwordincorrect: "Password was incorrect"});
      }
    });
  });
});

//here token is set as the key and ID to be its value, so change this later
/* const setToken = (tokenKey, idValue)=>{ 
  return Promise.resolve(redisClient.set(tokenKey, idValue))
}

const getAuthTokenId = (req,res)=>{
  const auth = req.headers.authorization;
  return redisClient.get(auth, (err, reply)=>{
    if(err || !reply){
      return res.status(400).json('Not authorized');
    }

    return res.json({id: reply});
  });
} */

//update information of a user
//:: TODO: FINISH THIS THING: (also get rid of duplicated code)
/* router.patch('/updateUser/:id', (req,res,next)=>{
  const id = req.params.id;

  const email = req.body.email;

  const {name, age, profilePicture, password} = req.body.formInput;

  User.findOne({email})
  .then((user)=>{
    if(!user){
      return res.status(400).json({emailnotfound: "Email Not Found"});
    }

    const updatedUserInfo = new User({
      name : req.body.name,
      email : req.body.email,
      password: req.body.password
    });

    res.json(updatedUserInfo);
  })
  .catch((err)=>{
    res.status(400).json('Error, could not update user');
  })
})
 */

module.exports = router;
