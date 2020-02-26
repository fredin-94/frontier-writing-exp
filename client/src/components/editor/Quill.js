import ReactQuill from 'react-quill';
import React from 'react';

class Quill extends React.Component{

    state = {
        editorHtml: ''
    }

    handleChange = (html)=>{
        this.setState({
            editorHtml: html
        });

    }

    //TODO: implement word counter
    render(){
        return(
            <div>
                <ReactQuill
                theme='snow'
                onChange={this.handleChange}
                value={this.state.editorHtml}
                modules={Quill.modules}
                formats={Quill.formats}
                bounds={'.app'}
                />
            </div>
        )
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
  
export default Quill;
