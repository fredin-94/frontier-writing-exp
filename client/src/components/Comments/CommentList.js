import React from 'react';
import {connect } from 'react-redux';

class CommentList extends React.Component{//classbased component
    
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
                    <h5> {this.props.comments.length} Comments:</h5>
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