import React from 'react';
import {connect} from 'react-redux';

import * as actions from 'actions/commentActions';

class CommentBox extends React.Component {
    
    state = {
        comment: ''
    }

    handleChange = (e)=>{
        this.setState({
            comment: e.target.value
        });
    }

    componentDidMount(){ 
        //this.props.getComments();
    }

    handleSubmit = (e)=>{
        e.preventDefault();

        //save comment by calling action creator
        this.props.saveComment(this.state.comment);

        this.setState({
            comment: ''
        });
    }
    
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h5>Leave a comment:</h5>
                    <textarea onChange={this.handleChange} value={this.state.comment} />
                    <div>
                        <button className="btn teal waves-effect">Submit comment</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, actions)(CommentBox);