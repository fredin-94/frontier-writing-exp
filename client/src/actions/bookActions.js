import axios from 'axios';
import { CREATE_BOOK, GET_ERRORS, GET_BOOK, GET_ALL_USERS_BOOKS, ERROR,UPDATE_BOOK, DELETE_BOOK } from './types';

export const createBook = (bookData)=>(dispatch)=>{
    console.log("in createbook action");
    axios.post('/api/books', bookData)
    .then((res)=>{

        console.log("success saved book");

        dispatch({
            type: CREATE_BOOK,
            payload: res.data
        });

    })
    .catch((err)=>{ //fix later
        console.log(err);

        dispatch({
            type: ERROR,
            error: err
        });
    });
}

export const getBook = (bookId)=>(dispatch)=>{
    axios.get(`/api/books/${bookId}`)
    .then((res)=>{
        console.log("action got 1 book");
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

export const deleteBook = (bookId)=>(dispatch)=>{
    axios.delete(`/api/books/${bookId}`)
    .then((res)=>{
        console.log("action deleted book");
        dispatch({
            type: DELETE_BOOK,
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

export const updateBook = (bookId)=>(dispatch)=>{
    axios.patch(`/api/books/${bookId}`) //decide if i should use patch or put, (backend is patch atm)
    .then((res)=>{
        console.log("action updated book");
        dispatch({
            type: UPDATE_BOOK,
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