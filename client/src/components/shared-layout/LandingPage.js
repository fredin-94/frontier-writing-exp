import React from "react";
import {Link} from "react-router-dom";

class LandingPage extends React.Component{
    render(){
        return(
            <div style={{ height: "75vh" }} className="container valign-wrapper">
                <div className="row">
                    <div className="col s12 center-align">
                       
                        <h4>Welcome</h4>
                        <p>New member? Sign up! Already a member? Sign in!</p>
                        
                        <div className="col s6">
                            <Link to="/register" style={{ width: "140px", borderRadius: "3px", letterSpacing: "1.5px" }}
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                                Sign Up
                            </Link>
                        </div>
                        
                        <div className="col s6">
                            <Link to="/login" style={{ width: "140px", borderRadius: "3px", letterSpacing: "1.5px"}}
                                className="btn btn-large btn-flat waves-effect white black-text">
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