import {GET_ALL_USERS_BOOKS, CREATE_BOOK, GET_BOOK, UPDATE_BOOK, ERROR, SET_CHAPTER} from '../actions/types';

const initialState = {
    userBooks: [],
    selectedBook: {}, //idk if needed
    selectedChapter: {},
    selectedBookChaptersLength: 0,
    selectedBookChapters: []
}

export default function(state = initialState, action){

    if(action.type === GET_BOOK){

        let chapters = action.payload.chapters

        return {
            ...state,
            selectedBook: action.payload, 
            selectedBookChaptersLength: chapters.length,
            selectedBookChapters: chapters
        }
    }
    else if(action.type === GET_ALL_USERS_BOOKS){
        return {
            ...state,
            userBooks: action.payload
        }
    }
    else if (action.type === CREATE_BOOK){
        return {
            ...state,
            userBooks: [...state.userBooks, action.payload] 
        }
    } 
    else if (action.type === UPDATE_BOOK){
        return {
            ...state,
            userBooks: [...state.userBooks, action.payload] //CHANGE LATER
        }
    } 
    else if(action.type === SET_CHAPTER){ //remove??
        return{
            ...state,
            selectedChapter: action.payload
        }
    }
    else if(action.type === ERROR){
        return{
            ...state,
            error: action.error
        }
    }
    else{
        return state;
    }


}
