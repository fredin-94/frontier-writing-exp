//import text editor here
import React from 'react';
//import Quill from 'components/editor/Quill';
import {connect} from 'react-redux';
import {updateChapter,setChapter} from '../../actions/bookActions';
import { getIdFromUrl } from 'utils/utils';
import ReactQuill from 'react-quill';

class WriteBook extends React.Component{

    state = {
        chapterName: '',
        text: '',
        chapterId: ''
    }

    componentWillUnmount(){ //update book in DB before exiting page
        //var url = window.location.href;
        let chapterId = this.state.chapterId;
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

        this.props.setChapter(chapter);

        this.setState({
            text: chapter.content,
            chapterName: chapter.title,
            chapterId : chapterId
        });
    }

    handleChange = (text)=>{
        this.setState({ 
            text: text 
        });
    }

    render(){ 
        return(
            <div className="container">
                <h4>{this.state.chapterName}</h4>
                <ReactQuill
                theme='snow'
                onChange={this.handleChange}
                value={this.state.text}
                modules={WriteBook.modules}
                formats={WriteBook.formats}
                bounds={'.app'}
                />
            </div>
        );
    }
}

WriteBook.modules = {
    toolbar: [
        [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
        [{size: []}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, 
        {'indent': '-1'}, {'indent': '+1'}]
    ],
    clipboard: {
        matchVisual: false,
    }
}
 
WriteBook.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent'
]

const mapStateToProps = (state)=>({
    books: state.books 
});

export default connect(mapStateToProps, {updateChapter, setChapter})(WriteBook);

//need data about which chapter to edit for which book, idk, maybe put that in redux store from the selectedbook page?


