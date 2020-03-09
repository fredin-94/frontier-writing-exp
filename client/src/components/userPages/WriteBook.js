//import text editor here
import React from 'react';
import Quill from 'components/editor/Quill';
import {connect} from 'react-redux';
import {updateBook} from '../../actions/bookActions';

class WriteBook extends React.Component{

    state = {
        chapterName: '',
        text: ''
    }

    getChapterIdFromUrl(){ //change to get this from utils instead
        var url = window.location.href;  //get the whole url
        var cId = url.substr(url.lastIndexOf('/') + 1);
        return cId;
    }

    componentWillUnmount(){
        //update book here
        this.props.updateBook(this.props.books.selectedBook._id, this.state.text);
    }

    componentDidMount(){

        let chapterId = this.getChapterIdFromUrl();
        let chapters = this.props.books.selectedBook.chapters;
        
        let text = "";

        chapters.forEach(chapter =>{
            if(chapter._id === chapterId){
                text = chapter.content
            }
        });

        this.setState({
            text: text
        });
    }

    handleChange = (value)=>{
        this.setState({ 
            text: value 
        });
    }

    render(){
        return(
            <div className="container">
                <h4>chapter name</h4>
                <Quill value={this.state.text} onChange={this.handleChange}/>
            </div>
        );
    }

}

const mapStateToProps = (state)=>({
    books: state.books 
});

export default connect(mapStateToProps, {updateBook})(WriteBook);


//need data about which chapter to edit for which book, idk, maybe put that in redux store from the selectedbook page?


