import React from 'react';

class CommentBox extends React.Component {
    
    state = {
        comment: ''
    }

    handleChange = (e)=>{
        this.setState({
            comment: e.target.value
        });
    }

    handleSubmit = (e)=>{
        e.preventDefault();

        //save comment by calling action creator

        this.setState({
            comment: ''
        });
    }
    
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Leave a comment:</h4>
                    <textarea onChange={this.handleChange} value={this.state.comment} />
                    <div>
                        <button>Submit comment</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CommentBox;