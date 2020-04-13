import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  background-color: ${props => (props.login ? 'white' : 'black')};
  color: ${props => (props.login ? 'black' : 'white')};
  font-size: 15.5px;
  font-family: 'Raleway', sans-serif;
  border-radius: 2px;
  margin: 0.2em 1em;
  padding: 1.2em 2.5em;
  transition: 0.5s all ease-out;
  border: none;
  box-shadow: 0 5px 5px 0 rgba(0,0,0,0.24),0 5px 5px 0 rgba(0,0,0,0.19);
  width: 9em;

  &:hover {
    background-color: ${props => (props.login ? 'white' : 'black')};
    color: ${props => (props.login ? 'black' : 'white')};
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
  }
`;

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

            this.history.push('/homepage');

        }
    }
   
    render(){
        return(
            <div style={{ height: "55vh" }} className="container valign-wrapper">
                <div className="row">
                    <div className="col s12 center-align">
                       
                        <h4>Welcome to FWE!</h4>
                        <h6 style={{color:"#dd8585"}}>- Online writing community deluxe -</h6>
                        <hr/>
                        <p>New member? Sign up! Already a member? Sign in!</p>
                        
                        <div>
                            <Link to="/register" style={{ width: "140px"}}>
                                <Button>SIGN UP</Button>
                            </Link>
                            <Link to="/login" style={{ width: "140px"}}>
                                <Button login>SIGN IN</Button>
                            </Link>
                            
                        </div>
                    
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;