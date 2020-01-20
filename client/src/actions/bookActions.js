import axios from 'axios';
import { CREATE_BOOK, GET_ERRORS, GET_BOOK, GET_ALL_USERS_BOOKS, ERROR } from './types';

export const createBook = (bookData)=>(dispatch)=>{
    console.log("in createbook action");
    axios.post('/api/books', bookData)
    .then((res)=>{

        console.log("success saved book");

        dispatch({
            type: CREATE_BOOK,
            payload: res.data
        }); //maybe dont need?

    })
    .catch((err)=>{ //idk if i have err.res.data for this?
        console.log(err);

        dispatch({
            type: ERROR,
            error: err
        });
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
        console.log(err);

        dispatch({
            type: ERROR,
            error: err
        });
    });
}

export const getAllBooksOfAUser = (userId)=>(dispatch)=>{
    console.log("GET ALL BOOKS OF USER ACTION");
    axios.get(`/api/books/user/${userId}`)
    .then((res)=>{

        console.log("GOT USERS BOOKS AXIOS");

        dispatch({
            type: GET_ALL_USERS_BOOKS,
            payload: res.data
        });
    })
    .catch((err)=>{
        console.log("THERE WAS AN ERROR");

        dispatch({
            type: ERROR,
            error: err
        });
    });

}