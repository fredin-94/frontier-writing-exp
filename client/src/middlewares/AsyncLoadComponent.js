import React, {Component} from 'react';

//hoc to do code splitting on components so that the code of the components
//doesnt load until the user actually visits that route
//so no code that the user doesnt need is loaded.

export default function asyncLoadComponent(importedComponent){
    class AsyncLoadComponent extends Component {
        state = {
            component: null
        }

        async componentDidMount(){
            const {default: component} = await importedComponent();
            this.setState({
                component: component
            }); 
        }

        render(){
            const Component = this.state.component;
            return Component ? <Component {...this.props}/> : null;
        }
    }
    return AsyncLoadComponent;
}