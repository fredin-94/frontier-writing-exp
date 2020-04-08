//import text editor here
import React from 'react';
import Quill from 'components/editor/Quill';
import {connect} from 'react-redux';
import {updateChapter,setChapter} from '../../actions/bookActions';
import { getIdFromUrl } from 'utils/utils';

class WriteBook extends React.Component{

    state = {
        chapterName: '',
        text: '',
        chapterId: ''
    }

    componentWillUnmount(){ //update book in DB before exiting page
        var url = window.location.href;
        let chapterId = getIdFromUrl(url, 1);
        let bookId = this.props.books.selectedBook._id;

        let updateData = {
            title: this.state.chapterName,
            content: this.state.text
        }

        this.props.updateChapter(bookId, chapterId, updateData);        //change
    }

    componentDidMount(){
        var url = window.location.href;
        let chapterId = getIdFromUrl(url, 1);

        let chapters = this.props.books.selectedBook.chapters;
        let chapter = chapters.find(chap => chap._id == chapterId);

        console.log(chapter);
        this.props.setChapter(chapter);

        this.setState({
            text: chapter.content,
            chapterName: chapter.title
        });
    }

    updateText = (text)=>{
        this.setState({ 
            text: text 
        });
    }

    render(){ 
        return(
            <div className="container">
                <h4>{this.state.chapterName}</h4>
                <Quill text={this.state.text} updateText={this.updateText}/>
            </div>
        );
    }
}

const mapStateToProps = (state)=>({
    books: state.books 
});

export default connect(mapStateToProps, {updateChapter, setChapter})(WriteBook);

//need data about which chapter to edit for which book, idk, maybe put that in redux store from the selectedbook page?


