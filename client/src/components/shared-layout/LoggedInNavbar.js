import React from "react";
import {Link} from "react-router-dom";

class LoggedInNavbar extends React.Component{
  render(){
    return(
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">

            <Link to="/" className="col s5 black-text">
              <i className="material-icons">code</i>
              Home
            </Link>

            <Link to="/userPage" className="col s5 black-text">
              My page
            </Link>

            <Link to="/userBooks" className="col s5 black-text">
              Log out
            </Link>

          </div>
        </nav>
      </div>
    );
  }
}

export default LoggedInNavbar;
