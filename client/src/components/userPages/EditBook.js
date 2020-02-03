import React from 'react';

class EditBook extends React.Component{

    render(){
        return(
            <div className="container">
                <h5>Edit book</h5>

                <form>
                    <label htmlFor="title">Title: </label>
                    <input id="title" onChange={(e)=>this.setState({title: e.target.value})} type="text"/>
                    <br/>
                    <label htmlFor="author">Author name: </label> 
                    <input id="title" value={this.state.author} onChange={(e)=>this.setState({author: e.target.value})} type="text"/>

                    <label htmlFor="summary">Summary: </label>
                    <textarea id="summary" onChange={this.handleSummary}/>        
                    
                    <label>Chapters: </label>
                    <div>
                    </div>

                    <label>Language: </label>

                    <label>Collaborators: </label>
                    
                    <label>Image source: </label>


                    
                    <div className="center">
                        <button disabled={!this.state.author || !this.state.title} className="waves-effect waves-light btn" onClick={this.handleCreateBook}>Edit book</button>
                    </div>
                </form>

            </div>
        );
    }

}

export default EditBook;