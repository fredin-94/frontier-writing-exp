import axios from 'axios';
import { CREATE_BOOK, GET_ERRORS, GET_BOOK, GET_ALL_USERS_BOOKS } from './types';

export const createBook = (bookData)=>(dispatch)=>{
    axios.post('/api/books', bookData)
    .then((res)=>{

        dispatch({
            type: CREATE_BOOK,
            payload: res.data
        }); //maybe dont need?

    })
    .catch((err)=>{ //idk if i have err.res.data for this?
        if(err.response === null){
            dispatch({
                type: GET_ERRORS,
                payload: null
            });
        }else{
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        }
    });
}

export const getBook = (bookId)=>(dispatch)=>{
    //i guess i have to change this cuz it will go to same endpoint as the one for user id
    axios.get(`/api/books/:${bookId}`)
    .then((res)=>{
        dispatch({
            type: GET_BOOK,
            payload: res.data
        });
    })
    .catch((err)=>{

    });
}

export const getAllBooksOfAUser = (userId)=>(dispatch)=>{
    axios.get(`/api/books/:${userId}`)
    .then((res)=>{
        dispatch({
            type: GET_ALL_USERS_BOOKS,
            payload: res.data
        });
    })
    .catch((err)=>{

    });

}