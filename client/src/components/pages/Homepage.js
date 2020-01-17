import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

//import {logoutUser} from '../../actions/authActions';

import {getAllBooksOfAUser} from '../../actions/bookActions';


class Homepage extends Component {

    state = {
        //books : []
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
        const {user} = this.props.auth;
        
        //todo
        //get books that belong to the user and set them up so they can be displayed (maybe do this in a different compoent, displayBooks component)
        if(this.props.getAllBooksOfAUser(user.email)){ //if there exists any books, or use user._id instead??
            //loop to display all books of the user
        }else{
           return(
            <p>You have 0 books available.</p>
           );
        }
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
                            {this.displayBooks()}
                            <button className="waves-effect waves-light btn">
                                <Link  style={{ color: '#FFF' }} to='/createBook'>Create a new book</Link>    
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

 Homepage.propTypes = {
    //logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}  
 
const mapStateToProps = (state)=>({
    auth: state.auth,
    books: state.books //idk if correct
});
 
export default connect(mapStateToProps, {getAllBooksOfAUser})(Homepage);