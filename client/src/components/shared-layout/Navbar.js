import React from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';

import {logoutUser} from '../../actions/authActions';

class Navbar extends React.Component{ //choose which to show for logged in /out users
  
  state = {

  }

  onLogoutClick = (e)=>{
    e.preventDefault();
    this.props.logoutUser();
  }; 

  renderLinks(){

    console.log("in renderLinksNavbar, " + this.props.auth.isAuthenticated);

    if(this.props.auth.isAuthenticated){
      return(
        <ul>
          <li> <Link to="/about" className="">
              About
            </Link>
          </li>

          <li>
            <Link to="/homepage" className=" "> 
                    My Page
            </Link>
          </li>

          <li>
            <button className="btn-flat waves-effect waves-teal" onClick={(e)=>{ 
              e.preventDefault();
              this.props.logoutUser(); }}>
              <Link to="/" className="black-text">
                    Sign out
              </Link>
            </button>
          
          </li>
        </ul>
      );
     
    } else{
        return(
          <ul>
            <li> <Link to="/about" className="">
                About
              </Link>
            </li>

            <li>
              <Link to="/login" className=" "> 
                      Log in
              </Link>
            </li>

            <li>
              <Link to="/register" className=" ">
                    Register
              </Link>
            </li>
          </ul>
        );
    }
  }
  
  render(){
    return(
      <div className="center">
        <div className="navbar">
          <nav className="z-depth-0">
            <div className="nav-wrapper teal">
            
            <div className="container">
              {this.renderLinks()}
            </div>

            </div>
          </nav>

        </div>
      </div>
      
    );
  }
}

const mapStateToProps = (state)=>({
  auth: state.auth
});

export default connect(mapStateToProps, {logoutUser})(Navbar);
