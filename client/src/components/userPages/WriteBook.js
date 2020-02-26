//import text editor here
import React from 'react';
import Quill from 'components/editor/Quill';

class WriteBook extends React.Component{


    render(){
        return(
            <div className="container">
                <h4>chapter name</h4>
                <Quill/>
            </div>
        );
    }

}

export default WriteBook;

//need data about which chapter to edit for which book, idk, maybe put that in redux store from the selectedbook page?


