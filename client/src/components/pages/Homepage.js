import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {logoutUser} from '../../actions/authActions';

class Homepage extends Component {

    state = {
        books : []
    }
    
/*     onLogoutClick = (e)=>{
        e.preventDefault();
        this.props.logoutUser();
    }; */

    countBooks = ()=>{
        //TODO
        //find books that belongs to this users email in the DB
        //get the num of books and display on the page
    }

    displayBooks = ()=>{
        //todo
        //get books that belong to the user and set them up so they can be displayed (maybe do this in a different compoent, displayBooks component)
    }

    onCreateBookClick = (e)=>{
        //go to endpoint where user can create a new book (set title, add a chapter, then choose to start writing that chapter or not)
    }

    render(){
        const {user} = this.props.auth;

        return(
            <div className="container">
                <div className="row">
                    <div className="col s12 center-align">
                        <h4>Welcome {user.name}</h4>
                        
                        {/* <button onClick={this.onLogoutClick}>
                            Log out
                        </button> */}

                        <div>
                            <p>You have 0 books available.</p>
                            <button>Write a new book</button>
                        </div>

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