import React, {Component} from 'react';
import {connect} from 'react-redux';

import {createBook} from '../../actions/bookActions';


class CreateBook extends Component {
    
    state = {
        addChapter : false
    }

    onClickAddChapter = (e)=>{
        e.preventDefault();

        console.log("clicked btn");

        this.setState({
            addChapter: true
        });
    }

    renderChapter = ()=>{
        if(this.addChapter === true){
            return(
                <div>
                    <label>Name of chapter: </label>
                    <input type="text"/>
                    <button>Add</button>
                </div>
            );
        }else {
            <button onClick={}>Add Chapter</button> /* should set add chapter to true */
        }
    }

    onClickCreateBook = (e)=>{
        e.preventDefault();

        //this.props.createBook(newBook);

        //show user page only if book saving was success
        this.props.history.push('/homepage');
    }

    render(){
        return(
            <div>
                <h5>Create a new book</h5>

                <form>
                    <label>Title: </label>
                    <input type="text"/>

                    <label>Author: </label>
                    <input type="text"/>

                    <label>Chapters: </label>
                    
                    {this.renderChapter()}
                
                    <button onClick={this.onClickCreateBook}>Create book</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state)=>({//may not need since we dont care abt the state anyway
    //books: state.book
});

export default connect(mapStateToProps, {createBook})(CreateBook);