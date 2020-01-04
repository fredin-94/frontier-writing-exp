import {saveComment} from 'actions/commentActions';
import * as actions from 'actions/authActions'; //change
import {SAVE_COMMENT} from 'actions/types';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('save comment', ()=>{
    it('has correct type', ()=>{
        const action = saveComment();

        expect(action.type).toEqual(SAVE_COMMENT);
    });

    it('has correct payload data', ()=>{
        const action = saveComment('payload comment');

        expect(action.payload).toEqual('payload comment');
    });
});

//make for auth actions?

const mockStore = configureStore([thunk])

 describe('',()=>{
     it('', ()=>{

        const store = mockStore();
        store.dispatch(action.loginUser());
        const action = store.getActions();
        const expectedAction = {

        }

     });
 })