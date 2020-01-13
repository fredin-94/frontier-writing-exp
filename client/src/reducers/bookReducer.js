import {GET_ALL_USERS_BOOKS, CREATE_BOOK, GET_BOOK} from '../actions/types';

const initialState = {
    //if i need
}

export default function(state = initialState, action){

    if(action === GET_BOOK){

    }else if(action === GET_ALL_USERS_BOOKS){

    }else if (action === CREATE_BOOK){

    }
    else{
        return state
    }


}
