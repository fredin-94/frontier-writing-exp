import React from 'react';
import {mount} from 'enzyme';

import CommentList from 'components/comments/CommentList';
import Root from '../../Root';

let component;

beforeEach(()=>{

    const initialState = {
        comments : [
            'comment 1',
            'comment 2'
        ]
    }

    component = mount(
        <Root initialState = {initialState}>
            <CommentList/>
        </Root>
    );
});

it('has one LI per comment', ()=>{
    expect(component.find('li')).toEqual(2);
});

it('renders each comment on screen', ()=>{
    expect(component.render().text()).toContain('comment 1');
    expect(component.render().text()).toContain('comment 2');
}); 

