import React from 'react';
import {connect} from 'react-redux';

class CommentList extends React.Component{
    
    renderComments(){
        return this.props.comments.map((comment)=>{
            return (
                <li key={comment}>
                    {comment}
                </li>
            )
        });
    }
    
    render(){
        return(
            <div>
                <ul>
                    <p> {this.props.comments.length} Comments </p>
                    {this.renderComments()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        comments: state.comments
    };
}

export default connect(mapStateToProps)(CommentList);