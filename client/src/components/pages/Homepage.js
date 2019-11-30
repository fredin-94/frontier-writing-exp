import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {logoutUser} from '../../actions/authActions';

class Homepage extends Component {
    onLogoutClick = (e)=>{
        e.preventDefault();
        this.props.logoutUser();
    };

    render(){
        const {user} = this.props.auth;

        return(
            <div className="container">
                <div className="row">
                    <div className="col s12 center-align">
                        <h4>Welcome {user.name}</h4>
                        
                        <button onClick={this.onLogoutClick}>
                            Log out
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

Homepage.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state)=>({
    auth: state.auth
});

export default connect(mapStateToProps,{logoutUser})(Homepage);