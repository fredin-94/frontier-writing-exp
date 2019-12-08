import {SAVE_COMMENT, GET_COMMENTS} from '../actions/types';


export default function (state = [], action){

    if(action.type === SAVE_COMMENT){
        return [...state, action.payload] //add new comment to state
    }
    if(action.type === GET_COMMENTS){
        const comments = action.payload.data.map(comment => comment.name);
        return [...state, ...comments];
    }
    else{
        return state;
    }

}