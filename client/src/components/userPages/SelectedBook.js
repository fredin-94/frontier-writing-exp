import React from 'react';
import CommentBox from '../comments/CommentBox';
import CommentList from '../comments/CommentList';

import JoditEditor from '../joditEditorHook/JoditEditor';

export default (book) => { //probably need to make it a classcomponent
    const style = {
        maxHeight: '100px',
        maxWidth: 'auto'
    }

    //TODO: fix function to display all chapters on the side

    return(
        <div>
            <div><h4>{book.title}</h4></div>
            <div className="row">
                <div className="col s2">
                    <p>Chapters: </p>
                    <p>*show all chapters here*</p>
                </div>
                <div className="col s10">
                    <JoditEditor/>
                </div>
                <div className="col s12">
                    <CommentBox/>
                    <CommentList/>
                </div>
            </div>
           
        </div>
    );

}
