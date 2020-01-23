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

        const style = {
            maxHeight: 'auto',
            maxWidth: '150px'
        }

         const displayingBooks = userBooks.map((book)=>
            <div className="col s12 m4" key={book._id}>
                <div className="card">
                    <div className="card-image">
                        <img alt="Book" src="https://ccplwritersblock.files.wordpress.com/2019/09/shutterstock_1068141515.jpg"/>
                    </div>
                    <div className="card-content">
                        <h6 className="small-title">Title: <Link to="/SelectedBook">{book.title}</Link></h6>
                        <hr/>
                        <p className="small-title">Summary: </p> {book.summary}
                        <p className="small-title">Author name: </p> {book.authors}
                        <p className="small-title">Language: </p> {book.language}
                    </div>
                </div>
                
            </div>
        ); 

        const amountOfBooks = userBooks.length;

        return(
            <div className="row">
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
    auth: PropTypes.object.isRequired
}  
 
const mapStateToProps = (state)=>({
    auth: state.auth,
    books: state.books 
});
 
export default connect(mapStateToProps, {getAllBooksOfAUser})(Homepage);