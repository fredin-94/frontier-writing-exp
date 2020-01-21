import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

//import {logoutUser} from '../../actions/authActions';

import {getAllBooksOfAUser} from '../../actions/bookActions';


class Homepage extends Component {

    state = {
        books : [],
    }
    
/*     onLogoutClick = (e)=>{
        e.preventDefault();
        this.props.logoutUser();
    }; */

    renderAllUserBooks = ()=>{
        const userBooks = this.props.books.userBooks;
        
        console.log(this.props.books.userBooks);

        const style = {
            maxHeight: '100px',
            maxWidth: 'auto'
        }

         const displayingBooks = userBooks.map((book)=>
            <div key={book._id}>
                <div><img style={style} alt="Book image" src="https://images-na.ssl-images-amazon.com/images/I/61-uFOBDLDL.jpg"/></div>
                <p><Link to="/SelectedBook">Title: {book.title}</Link></p>
                <p>Summary: {book.summary}</p>
                <p>Author: {book.author}</p>
                <p>Language: {book.language}</p>
            </div>
        ); 

        const amountOfBooks = userBooks.length;

        return(
            <div>
                <p>{amountOfBooks} Books:</p>
                {displayingBooks}
            </div>
        );
    }

    componentDidMount(){
        const {user} = this.props.auth;
        this.props.getAllBooksOfAUser(user.id)
    }

    componentDidUpdate(){
    }

    render(){
        const {user} = this.props.auth;

        return(
            <div className="container">
                <div className="row">
                    <div className="col s12 center-align">
                        <h4>Welcome {user.name}</h4>
                        
                        {this.renderAllUserBooks()}

                        <hr/>
                        <div>
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