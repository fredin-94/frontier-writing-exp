import React from "react";
import {Link} from "react-router-dom";

class LandingPage extends React.Component{

    validateUser = ()=>{
        if(this.props.isAuthenticated){ //if user clicks log out they should log out, look how this was done on another page
            return(
                <div>
                    <button>log out</button> 
                </div>
            );        
        }
        else if(!this.props.isAuthenticated){ //if user is logged out
            //change stuff in render depending on if user is logged in
        }
    }

    componentDidMount(){
        if(this.props.isAuthenticated){ //if user is logged in they should not see this page

            this.history.push('/homepage'); //make this work

        }

    }
   
    render(){
        return(
            <div style={{ height: "55vh" }} className="container valign-wrapper">
                <div className="row">
                    <div className="col s12 center-align">
                       
                        <h4>Welcome to FWE!</h4>
                        <h6 style={{color:"teal"}}>Online writing community deluxe</h6>
                        <hr/>
                        <p>New member? Sign up! Already a member? Sign in!</p>
                        
                        <div className="btn-container col s12 m6">
                            <Link to="/register" style={{ width: "140px"}}
                                className="btn btn-large waves-effect waves-light teal hoverable">
                                Sign Up
                            </Link>
                        </div>
                        
                        <div className="btn-container col s12 m6">
                            <Link to="/login" style={{ width: "140px"}}
                                className="btn btn-large btn waves-effect white black-text">
                                Log In
                            </Link>
                        </div>
                    
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;