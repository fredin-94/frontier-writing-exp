//dependencies
import axios from 'axios';
import jwt_decode from 'jwt-decode';
//local
import setAuthToken from '../utils/setAuthToken';
import {GET_ERRORS,SET_CURRENT_USER,USER_LOADING} from './types';

//http requests
//-> register
axios.post('/api/users/register', userData)
.then((res)=>{
    history.push('/login'); //send to login page if success (?)
})
.catch((err)=>{
    //send to reducers
    dispatch({
        type: GET_ERRORS,
        payload: err.response.data
    });
});

//-> login
export const loginUser = (userData)=> (dispatch)=>{
    axios.post('/api/users/login', userData)
    .then((res)=>{
        const token = res.data.token;
        localStorage.setItem('jwtToken', token);

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
}

export const setCurrentUser =(decoded)=>{
    return{
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

export const setUserLoading = ()=>{
    return{
        type: USER_LOADING
    }
}

export const logoutUser = ()=> (dispatch)=>{
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
}