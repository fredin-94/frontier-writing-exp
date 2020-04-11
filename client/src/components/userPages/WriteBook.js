//import text editor here
import React from 'react';
import Quill from 'components/editor/Quill';
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
        console.log("state texxt");
        console.log(this.state.text);

        let updateData = {
            title: this.state.chapterName,
            content: this.state.text
        }

        this.props.updateChapter(bookId, chapterId, updateData);        //change
    }

    componentDidMount(){
        //var url = window.location.href;
        let chapterId = this.props.books.selectedBook._id;

        let chapters = this.props.books.selectedBook.chapters;
        let chapter = chapters.find(chap => chap._id == chapterId);

        console.log(chapter);
        this.props.setChapter(chapter);

        this.setState({
            text: chapter.content,
            chapterName: chapter.title,
            chapterId : chapterId
        });
    }

    handleChange = (text)=>{
        console.log("text update:");
        console.log(text);
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
                modules={Quill.modules}
                formats={Quill.formats}
                bounds={'.app'}
                />
            </div>
        );
    }
}




Quill.modules = {
    toolbar: [
        [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
        [{size: []}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, 
        {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
    ],
    clipboard: {
        matchVisual: false,
    }
}
 
Quill.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
]




const mapStateToProps = (state)=>({
    books: state.books 
});

export default connect(mapStateToProps, {updateChapter, setChapter})(WriteBook);

//need data about which chapter to edit for which book, idk, maybe put that in redux store from the selectedbook page?


