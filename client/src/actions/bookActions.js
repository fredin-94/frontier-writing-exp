import axios from 'axios';
import { CREATE_BOOK, GET_BOOK, GET_ALL_USERS_BOOKS, ERROR,UPDATE_BOOK, DELETE_BOOK, SET_CHAPTER } from './types';

export const createBook = (bookData)=>(dispatch)=>{
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

export const updateBook = (bookId, data)=>(dispatch)=>{
    axios.patch(`/api/books/${bookId}`, data) //decide if i should use patch or put, (backend is patch atm)
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

//maybe remove later and just use the update book method.
export const updateChapter = (bookId, chapterId, data)=>(dispatch)=>{
    axios.patch(`/api/books/${bookId}/${chapterId}`, data) //decide if i should use patch or put, (backend is patch atm)
    .then((res)=>{
        console.log("action updated book chapter");
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
    axios.get(`/api/books/user/${userId}`)
    .then((res)=>{

        console.log("GOT USERS BOOKS AXIOS");

        dispatch({
            type: GET_ALL_USERS_BOOKS,
            payload: res.data
        });
    })
    .catch((err)=>{
        console.log("ERROR get all books");

        dispatch({
            type: ERROR,
            error: err
        });
    });
}

export const setChapter = (chapter)=>(dispatch)=>{
    dispatch({
        type: SET_CHAPTER,
        payload: chapter
    });
}