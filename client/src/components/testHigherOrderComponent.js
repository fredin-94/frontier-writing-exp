import React , {Component} from 'react';

export default (ChildComponent) => {

    class ComposedComponent extends Component{

        stuffYouShouldDo(){
            return 1;
        }

        //with HOC we need to make sure we pass down props to the lowest components, tex actions and history
        render(){
            return <ChildComponent {...this.props} />
        }
    }

    //add mapstatetoprops if needed
    
    //surround with connect if needed
    return ComposedComponent;
};

//this is a hoc, we wrap other components in the HOC like this:
//import hoc in the component that wants to use it
//export default hocName(nameOfcomponentToUseTheHoc);
//the component will then become the child component
//that component will then always be surrounded by the stuff in this component

//using this can help us reduce duplicated code used in many different components