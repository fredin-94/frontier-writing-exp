import React, {Component} from 'react';
import {connect} from 'react-redux';

import {createBook} from '../../actions/bookActions';
import LanguageSelector from 'components/shared-layout/LanguageSelector';


class CreateBook extends Component {
    
    state = {
        addChapter : false,
        title: '',
        author: '', //or authors??
        chapters: [],
        chapter: '',
        summary: '',
        language: ''
    }

    onClickAddChapter = (e)=>{
        e.preventDefault();

        console.log("clicked btn");

        this.setState({
            addChapter: true
        });
    }

    addChapterToState = (e)=>{
        e.preventDefault();

         this.setState(
            (prevState)=> ({
                chapters: [...prevState.chapters, this.state.chapter]
        }));

        const chapterInp = document.getElementById('chapter');
        chapterInp.value = "";
    }

    addChapter = ()=>{
        if(this.state.addChapter === true){
            return(
                <div>
                    <label>Name of chapter: </label>
                    <input id="chapter" onChange={(e)=>{this.setState({chapter: e.target.value})}} type="text"/>
                    <button onClick={this.addChapterToState} className="waves-effect waves-light btn-small" >Add</button> 
                </div>
            );
        }else {
           return(
            <button onClick={this.onClickAddChapter} className="waves-effect waves-light btn-small">Add Chapter</button> /* should set add chapter to true */
           );
        }
    }
    
    onClickCreateBook = (e)=>{
        e.preventDefault();

        const newBook = {
            title: this.state.title,
            author: this.state.author,
            chapters: this.state.chapters,
            summary: this.state.summary, 
            language: this.state.language
        }

        this.props.createBook(newBook);

        //show user page only if book saving was success
        this.props.history.push('/homepage');
    }

    handleSummary = (e)=>{
        this.setState({
            summary: e.target.value //w.e is in the textarea at the moment
        });
    }

    render(){

        const chapters = this.state.chapters.map((chapter, key)=>
            <p>{chapter}</p>
        );

        return(
            
            <div className="container">
                <h5>Create a new book</h5>

                <form>
                    <label>Title: </label>
                    <input onChange={(e)=>this.setState({title: e.target.value})} type="text"/>

                    <label>Author: </label>
                    <input onChange={(e)=>this.setState({author: e.target.value})} type="text"/>

                    <label>Summary: </label>
                    <textarea onChange={this.handleSummary}/>        
                    
                    <label>Chapters: </label>
                    {chapters}
                    {this.addChapter()}

                    <div>
                        <label>What language is the book written in?</label>
                        <LanguageSelector/>
                        <select>
                        <option value="Afrikanns">Afrikanns</option>
                        <option value="Albanian">Albanian</option>
                        </select>
                    </div>
                    
                    <div className="center">
                        <button className="waves-effect waves-light btn" onClick={this.onClickCreateBook}>Create book</button>
                    </div>
                </form>
            </div>
        );
    }
}

//const mapStateToProps = (state)=>({//may not need since we dont care abt the state anyway
    //books: state.books //to reach the book state via this.props.books instead
    //we wont need it tho i think, so maybe mstp can be null and we only use the 2nd param of conenct for maptodispatch
//});

export default connect(null, {createBook})(CreateBook);

//since this component doesnt care if anything is updated in the store (ithink) we can have mstp as null
//we can have the mapdispatchtoprops but we dont need to, it just looks nicer in code
/* since you can write props.createbook(stuff) instead of props.dispatch(createbook(stuff)) */