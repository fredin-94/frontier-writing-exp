import React from 'react';
import {connect} from 'react-redux';
import CommentBox from '../comments/CommentBox';
import CommentList from '../comments/CommentList';

import JoditEditor from '../joditEditorHook/JoditEditor';

import {getBook} from '../../actions/bookActions';


class SelectedBook extends React.Component{
    
    getBookIdFromUrl(){
        var url = window.location.href;  //get the whole url
        var bookId = url.substr(url.lastIndexOf('/') + 1);
        return bookId;
    }
    //TODO: fix function to display all chapters on the side

    handleEditBookBtn = (e)=>{
        const bookId = this.getBookIdFromUrl(); //maybe wrong
        
        
        this.props.history.push(`/editBook/${bookId}`);
    }

    componentDidMount(){
        const bookId = this.getBookIdFromUrl();
        this.props.getBook(bookId);
    }

    render(){

        const style = {
            maxHeight: '100px',
            maxWidth: 'auto'
        }

        const book = this.props.books.selectedBook; //probly wrong
        console.log("WANT BOOK HERE: >>>>>>");
        console.log(book);

        return(
            <div className="container">
                <div>
                   <h4>{book.title}</h4>
                    <button onClick={this.handleEditBookBtn} className="btn btn-small teal waves-effect">Edit Book</button>
                </div>
                <div className="row">
                    <div className="col s2">
                        <p>Chapters: </p>
                        <p>*show all chapters here*</p>
                    </div>
                    <div className="col s10">
                        <JoditEditor/>
                    </div>
                    <div className="col s12">
                        <CommentBox/>
                        <CommentList/>
                    </div>
                </div>
               
            </div>
        );
    }

}

const mapStateToProps = (state)=>({
    books: state.books 
});

export default connect(mapStateToProps, {getBook})(SelectedBook);