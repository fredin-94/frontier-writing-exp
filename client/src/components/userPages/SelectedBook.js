import React from 'react';
import {connect} from 'react-redux';
import CommentBox from '../comments/CommentBox';
import CommentList from '../comments/CommentList';
import {Link} from "react-router-dom";

//import JoditEditor from '../joditEditorHook/JoditEditor'; //if i remove remember to remove from json n rebuild

import {getBook, deleteBook} from '../../actions/bookActions';


class SelectedBook extends React.Component{
    
    state = {
        selectedChapter : ''
    }

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

    handleSelectChapter = (e)=>{
        e.preventDefault();
        console.log(e.target.value);
        this.setState({
            selectedChapter: e.target.value //check this
        });
    }

    //if there is a chapter selected, its contents should be displayed in the text editor 
    //so im thinking, have this site only to show backside text, edit delete etc, and only show text editor on another page after the chapter has been selected

    renderChapters = ()=>{
        const chapters = this.props.books.selectedBook.chapters; 
        const book = this.props.books.selectedBook; 
        const bookId = this.getBookIdFromUrl();
        if(book !== undefined && chapters!== undefined){
            const chaptersDisplayed = chapters.map((chapter)=>
                <div key={chapter.title}><Link to={`/writeBook/${bookId}/${chapter._id}`} className="chapterList">{chapter.title}</Link></div>
            );
            return chaptersDisplayed;
        }
        else{
            return <p>Couldn't display chapters</p>
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
                    <button style={{marginRight:'5px'}} onClick={this.handleEditBookBtn} className="btn btn-small teal waves-effect">Edit</button>
                    <button onClick={this.handleDeleteBookBtn} className="btn btn-small red waves-effect">Delete</button>
                </div>
                <div className="row">
                    <div className="col s6">
                        <h6>Chapters: </h6>
                        {this.renderChapters()}
                    </div>
                    <div  className="col s6">
                        <h6>Summary: </h6>
                        {book.summary}
                    </div>
                   {/*  <div className="col s10">
                        <JoditEditor/>
                    </div> */}
                </div>
                <div className="row">
                    <div className="col s3"></div>
                    <div className="col s6 center-align">
                        <CommentBox/>
                        <CommentList/>
                    </div>
                    <div className="col s3"></div>
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