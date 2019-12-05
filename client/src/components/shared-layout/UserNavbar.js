import React from "react";
import {Link} from "react-router-dom";

class UserNavbar extends React.Component{
  render(){
    return(
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">

            <Link to="/" className="col s5 brand-logo left black-text">
              <i className="material-icons">code</i>
              FRONTIER-BLOGGING-EXP
            </Link>

            <Link to="/userPage" className="col s5 brand-logo left black-text">
              FRONTIER-BLOGGING-EXP
            </Link>

            <Link to="/userBooks" className="col s5 brand-logo left black-text">
              FRONTIER-BLOGGING-EXP
            </Link>

          </div>
        </nav>
      </div>
    );
  }
}

export default UserNavbar;
