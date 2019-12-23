import React from "react";
import {Link} from "react-router-dom";

class Navbar extends React.Component{ //choose which to show for logged in /out users
  render(){
    return(
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">

            <Link to="/" className="col s5 brand-logo center black-text">
              <i className="material-icons">code</i>
              FRONTIER-BLOGGING-EXP
            </Link>

            <Link to="/signout" className="col s5 black-text">
              Sign out
            </Link>

            <Link to="/signin" className="col s5 black-text">
              Sign in
            </Link>

            <Link to="/about" className="col s5 black-text">
              About
            </Link>

            <Link to="/mypage" className="col s5 black-text"> 
              My Page
            </Link>

          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
