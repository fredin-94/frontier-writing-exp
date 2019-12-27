//dependencies
import axios from 'axios';
import jwt_decode from 'jwt-decode';
//Local:
import setAuthToken from '../utils/setAuthToken';
import {GET_ERRORS, SET_CURRENT_USER, USER_LOADING} from './types';

//http requests

export const registerUser  = (userData, history)=>(dispatch)=>{
    axios.post('/api/users/register', userData)
    .then((res)=>{
        history.push('/login'); //register done = redirect to login
    })
    .catch((err)=>{
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    });
};

export const loginUser = (userData)=>(dispatch)=>{
    axios.post('/api/users/login', userData)
    .then((res)=>{
        const token = res.data.token;

        localStorage.setItem('jwtToken', token); //store token in browser memory so that user doesnt get logged out everytime they go to a new page
        setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(setCurrentUser(decoded));

    })
    .catch((err)=>{
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    });
};

export const logoutUser = ()=>(dispatch)=>{
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({})); //will set authenticated to false
};

export const setCurrentUser = (decoded)=>{
    return{
        type: SET_CURRENT_USER,
        payload: decoded
    }
};

export const setUserLoading = ()=>{
    return{
        type: USER_LOADING
    }
};
