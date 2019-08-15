//dependencies
const Validator = require("validator");
const isEmpty = require("is-empty");

//get data from registration form, validate data
function validateUserRegisterInput(data){
  let errors = {};

  //convert empty fields to string to then validate
  if(isEmpty(data.name)){
    data.name = "";
  }
  if(isEmpty(data.email)){
    data.email = "";
  }
  if(isEmpty(data.password)){
    data.password = "";
  }
  if(isEmpty(data.password2)){
    data.password2 = "";
  }

  //check if all fields are valid or not
  if(Validator.isEmpty(data.name)){
    errors.name = "Name field must not be empty";
  }
  if(Validator.isEmpty(data.email)){
    errors.email = "E-Mail field must not be empty";
  }else if(!Validator.isEmail(data.email)){
    errors.email = "Invalid E-Mail format";
  }
  if(Validator.isEmpty(data.password)){
    errors.password = "Password field must not be empty";
  }
  if(Validator.isEmpty(data.password2)){
    errors.password2 = "Confirm password field must not be empty";
  }
  if(!Validator.isLength(data.password, {min: 6, max: 30})){
    errors.password = "Password must be between 6 and 30 characters";
  }
  if(!Validator.equals(data.password, data.password2)){
    errors.password2 = "Passwords must match";
  }

  //return any errors
  return{
    errors,
    isValid : isEmpty(errors) //only valid if there are no errors
  }
}

module.exports = validateUserRegisterInput
