//for big app we can use several files for integration tests

import React from 'react';
import {mount} from 'enzyme';
import Root from 'Root';
import App from 'components/App';
import moxios from 'moxios';

beforeEach(()=>{
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
      status: 200,
      response: [{
          name: 'got comment 1'},
          {name: 'got comment 2'}]  
    });
});

afterEach(()=>{
    moxios.uninstall(); 
});

it('can get a list of comments and render them', (done)=>{

    //Get whole app
    const component = mount(
        <Root>
            <App/>
        </Root>
    );
    
    //find get comments (for a btn with some id or w.e)
    component.find('.get-comments').simulate('click');

    moxios.wait(()=>{ //get data from moxios before running this

        component.update();

        //get a list of comments
        expect(component.find('li').length).toEqual(2);

        done(); //only set test to done if this inner function has been run
        component.unmount();
    });

  
});