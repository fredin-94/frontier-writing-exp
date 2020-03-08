//import text editor here
import React from 'react';
import Quill from 'components/editor/Quill';
import {connect} from 'react-redux';

class WriteBook extends React.Component{

    state = {
        chapterName: '',
    }

    render(){
        return(
            <div className="container">
                <h4>chapter name</h4>
                <Quill/>
            </div>
        );
    }

}

const mapStateToProps = (state)=>({
    books: state.books 
});

export default connect(mapStateToProps)(WriteBook);


//need data about which chapter to edit for which book, idk, maybe put that in redux store from the selectedbook page?


