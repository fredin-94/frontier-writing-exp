import React from 'react';
import {connect} from 'react-redux';
import CommentBox from '../comments/CommentBox';
import CommentList from '../comments/CommentList';
import {Link} from "react-router-dom";

//import JoditEditor from '../joditEditorHook/JoditEditor'; //if i remove remember to remove from json n rebuild

import {getBook, deleteBook} from '../../actions/bookActions';


class SelectedBook extends React.Component{
    
    state = {
        selectedChapter: '',
        currentChapter: 1
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
        console.log("chapts: " +  this.props.books.selectedBook.chapters);
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

    renderBookContent = ()=>{
        console.log(this.props.books.selectedBook.chapters);
        //const chapter = this.props.books.selectedBook.chapters[this.state.currentChapter-1]; 
        const book = this.props.books.selectedBook; 
        // if(book !== undefined && chapter !== undefined){
        //         return <div key={chapter.title}>
        //             <h5>{chapter.title}</h5>
        //             <p>{chapter.content}</p>
        //         </div>
        // }
    }

    setChapterToDisplay = (e)=>{
        if(e.target.textContent === "Next Chapter"){ //put in state?
            this.setState({
                currentChapter: this.state.currentChapter+1
            });
        }else{ //go prev chapter
            this.setState({
                currentChapter: this.state.currentChapter-1
            });
        }
    }

    renderPrevBtn = ()=>{
        if(this.state.currentChapter > 1){
            return <button onClick={this.setChapterToDisplay} className="btn btn-small teal waves-effect">Previous Chapter</button>
        }
    }

    renderNextBtn = ()=>{
        //if(this.props.books.selectedBook.chapters.length > 1 ){//&& this.state.currentChapter !== this.props.books.selectedBook.chapters.length
            return <button  onClick={this.setChapterToDisplay} className="btn btn-small teal waves-effect">Next Chapter</button>
        //}
    }

    componentDidMount(){
        const bookId = this.getBookIdFromUrl();
        this.props.getBook(bookId);
        //this.renderBookContent(this.state.currentChapter);
    }

    render(){
        const book = this.props.books.selectedBook; 
        return(
            <div className="container">
                <div className="row center-align">
                   <h4>{book.title}</h4>
                   <div className="row">
                        <h5>Summary: </h5>
                        {book.summary}
                   </div>
                   <div className="row">
                        <button style={{marginRight:'5px'}} onClick={this.handleEditBookBtn} className="btn btn-small teal waves-effect">Edit</button>
                        <button onClick={this.handleDeleteBookBtn} className="btn btn-small red waves-effect">Delete</button>
                   </div>
                </div>
                <div className="row">
                    <div className="col s2">
                        <h6>Chapters: </h6>
                        {this.renderChapters()}
                    </div>
                    <div  className="col s10">
                        {this.renderBookContent()}
                    </div>
                </div>
                <div className="row">
                   {this.renderPrevBtn()}
                   {this.renderNextBtn()}
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