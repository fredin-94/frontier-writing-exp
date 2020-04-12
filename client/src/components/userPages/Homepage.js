import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

import {getAllBooksOfAUser} from '../../actions/bookActions';


class Homepage extends Component {

    state = {
        books : [],
    }
    

    renderAllUserBooks = ()=>{
        const userBooks = this.props.books.userBooks;
        
        console.log(this.props.books.userBooks);

        const displayingBooks = userBooks.map((book)=>

            <div key={book._id} className="book-card">
                <img alt="Book" src="https://ccplwritersblock.files.wordpress.com/2019/09/shutterstock_1068141515.jpg"/>
                <div>
                    <span><Link className="title-link" to={`/selectedBook/${book._id}`}> <h6> {book.title} </h6> </Link></span>
                   {/*  TODO: add onhover to book title to show summary or something */}
                    <hr/>
                    <p className="c-text">{book.authors}</p>
                    <p className="c-text">{book.language}</p>
                </div>
            </div>
        ); 

        const amountOfBooks = userBooks.length;

        return(
            <div className="row">
                <p>{amountOfBooks} Books:</p>
                <div className="book-card-container">
                    {displayingBooks}
                </div>
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
                       
                        <section className="book-section">
                            {this.renderAllUserBooks()}
                        </section>

                        <hr/>
                        <div>
                            <button className="waves-effect waves-light btn common-button">
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
    auth: PropTypes.object.isRequired
}  
 
const mapStateToProps = (state)=>({
    auth: state.auth,
    books: state.books 
});
 
export default connect(mapStateToProps, {getAllBooksOfAUser})(Homepage);