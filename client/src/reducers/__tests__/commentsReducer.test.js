import commentsReducer from 'reducers/commentsReducer';
import {SAVE_COMMENT} from 'actions/types';

it('handles save comment actions', ()=>{

    const action = {
        type: SAVE_COMMENT,
        payload: 'new comment'
    }

    const newState = commentsReducer([], action);

    expect(newState).toEqual(['new comment']);

});

it('handles unknown actions without errors', ()=>{
    const newState = commentsReducer([], {type: 'STRANGE_TYPE'});

    expect(newState).toEqual([]);
});

