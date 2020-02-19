import React from 'react';
import {connect} from 'react-redux';
import CommentBox from '../comments/CommentBox';
import CommentList from '../comments/CommentList';

import JoditEditor from '../joditEditorHook/JoditEditor';

import {getBook, deleteBook} from '../../actions/bookActions';


class SelectedBook extends React.Component{
    
    getBookIdFromUrl(){ //change to get this from utils instead
        var url = window.location.href;  //get the whole url
        var bookId = url.substr(url.lastIndexOf('/') + 1);
        return bookId;
    }
    //TODO: fix function to display all chapters on the side

    handleEditBookBtn = (e)=>{
        const bookId = this.getBookIdFromUrl();
        
        this.props.history.push(`/editBook/${bookId}`);
    }

    handleDeleteBookBtn = (e)=>{
        const confirm = window.confirm("Are you sure you want to delete the book?");

        const bookId = this.getBookIdFromUrl(); 

        if(confirm){
            this.props.deleteBook(bookId);
        //if book was deleted without problem, send user to homepage:
            this.props.history.push(`/homepage`);
        }else{
            //dont delete book
        }

    }

    renderChapters = ()=>{
        const chapters = this.props.books.selectedBook.chapters; 
        const book = this.props.books.selectedBook; 


        if(book !== undefined && chapters!== undefined){

        console.log(chapters);

            return chapters.map((chapter)=>
                <a key={chapter.title}>chapter.title</a>
            );
        }
        else{
            console.log("IN ELSE");
            return <p>couldnt map chaps</p>
        }
        
    }

    componentDidMount(){
        const bookId = this.getBookIdFromUrl();
        this.props.getBook(bookId);
    }

    render(){

        const book = this.props.books.selectedBook; 

        return(
            <div className="container">
                <div className="row center-align">
                   <h4>{book.title}</h4>
                    <button onClick={this.handleEditBookBtn} className="btn btn-small teal waves-effect">Edit Book</button>
                    <button onClick={this.handleDeleteBookBtn} className="btn btn-small red waves-effect">Delete Book</button>
                </div>
                <div className="row">
                    <div className="col s2">
                        <p>Chapters: </p>
                        <p>*show all chapters here*</p>
                        {this.renderChapters()}
                    </div>
                    <div className="col s10">
                        <JoditEditor/>
                    </div>
                </div>
                <div className="row">
                    <div className="col s2"></div>
                    <div className="col s8 center-align">
                        <CommentBox/>
                        <CommentList/>
                    </div>
                    <div className="col s2"></div>
                </div>
               
            </div>
        );
    }

}

const mapStateToProps = (state)=>({
    books: state.books 
});

/* const mapDispatchToProps = (dispatch)=>({
        onDelete: (data, history)=>{
            deleteBook(data, dispatch, history);
        },
        getBook
}) */

export default connect(mapStateToProps, {getBook, deleteBook})(SelectedBook);