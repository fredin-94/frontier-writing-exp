//dependencies
const Validator = require("valiator");
const isEmpty = require("is-empty");

//check if input data is valid
module.exports = function validateUserLoginInput(data){
  let errors = {};

  //convert to string so we can use Validator
  if(isEmpty(data.email)){
    data.email = "";
  }
  if(isEmpty(data.password)){
    data.password = "";
  }

  if(Validator.isEmpty(data.email)){
    errors.email = "E-Mail field may not be empty";
  }else if(!Validator.isEmail(data.email)){
    errors.email = "Invalid E-Mail format";
  }

  if(Validator.isEmpty(data.password)){
    errors.password = "Password field must not be empty";
  }

  //return any errors
  return{
    errors,
    isValid: isEmpty(errors)
  };
};
