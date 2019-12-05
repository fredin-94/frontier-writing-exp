import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme'; //doesnt render react child components

//absolute reference import paths:
//these importstatements wont "break" even if we tex move this test file to another folder
import SelectedBook from 'components/userPages/SelectedBook';
import CommentBox from 'components/comments/CommentBox';
import CommentList from 'components/comments/CommentList';

//should also change these paths on all other pages??
//tex ./component will be components/component and ./components/app = components/app

let component;

beforeEach(()=>{ //before every single test
    component = shallow(<SelectedBook/>);
});

afterEach(()=>{ //unmount components after test is done to free up space (?) and prevent fails from happening
    component.unmount();
});

//npm run test
it('shows the comment box', () => {
    expect(component.find(CommentBox).length).toEqual(1); //find all comment boxes and make sure there is only 1
});

it('shows the comment list', () => {
    expect(component.find(CommentList).length).toEqual(1); //find all comment boxes and make sure there is only 1
});

//it statements usually have 1-2 "expect"

/*only make tests here related to selectedbook,
we should not tex make tests for other component inside selectedbook
because then if we change that other component we will fail
this test class even though it is not related to that other component

we dont want to know what code is inside other components in this testfile
*/

//make sure tests break at least 1 time to make sure they actually work and dont give us a wrongful pass
//tex by changing toEqual(1) to have 9 instead cuz that will not pass


  //const div = document.createElement('div');
    //ReactDOM.render(<SelectedBook/>, div); //try to render the app component, to make sure it doesnt crash
    //expect(div.innerHTML).toContain(stuff);
    //ReactDOM.unmountComponentAtNode(div); //destroy objects created during the test