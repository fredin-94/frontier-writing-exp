/* import React from 'react';
//import ReactDOM from 'react-dom';
import {mount} from 'enzyme'; 

import CommentBox from 'components/comments/CommentBox';
import Root from 'Root';


let component;

beforeEach(()=>{
    component = mount(
        <Root>
            <CommentBox/>
        </Root>
    );
});

afterEach(()=>{
    component.unmount();
});

it('has a textarea and a button', ()=>{
    //console.log(component.find("textarea").length);
    expect(component.find('textarea').length).toEqual(1);
    expect(component.find('button').length).toEqual(1);
});

//group together certain tests with describe so as to reduce duplicated code
describe('the textarea', ()=>{

    beforeEach(()=>{ //setup common to all test in the describe
        component.find('textarea').simulate('change', {
            target: {
                value: 'user comment'
            }
        }); 
    });

    it('allows user to enter text in textarea', ()=>{ //simulate the html change event (not by react name)
        //force component to rerender:
        component.update();
        //after update the textarea should hold the text we sent to the state
        expect(component.find('textarea').prop('value')).toEqual('user comment');
    });

    it('empties textarea on form submit',()=>{
        component.update();
        component.find('form').simulate('submit');
        component.update();
        expect(component.find('textarea').prop('value')).toEqual('');
    });
                                                                                            
});  */