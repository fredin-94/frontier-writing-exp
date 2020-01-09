import React from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';

class Navbar extends React.Component{ //choose which to show for logged in /out users
  
  state = {

  }

  renderLinks(){
    if(this.props.isAuthenticated){
      return(
         <div>
          <Link to="/mypage" className="col s5 black-text"> 
                  My Page
          </Link>

          <Link to="/signout" className="col s5 black-text">
                Sign out
          </Link>
        </div>
      );
     
    } else{
        return(
          <div>
            <Link to="/signin" className="col s5 black-text">
                Sign in
            </Link>

            <Link to="/signup" className="col s5 black-text">
                Sign up
            </Link>
          </div>
        );
    }
  }
  
  render(){
    return(
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">

            <Link to="/" className="col s5 brand-logo center black-text">
              <i className="material-icons">code</i>
              FRONTIER-BLOGGING-EXP
            </Link>

            <Link to="/about" className="col s5 black-text">
              About
            </Link>

           {this.renderLinks()}

          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(){
  return {
    //isAuthenticated : state.isAuthenticated
  }
}

export default connect(mapStateToProps)(Navbar);
