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
    console.log('in loginuder action');
    //const localToken = window.localStorage.getItem('token'); //maybe wrong

    //if(localToken){
        /* have the config, the axios req and idk 325
        if we have the token we can then request tex to go to the 
        /profile/id route if such exists since we have the id and are logged in

        */
    //} 
    /*
        else if there is no token, tex on signin, we want to go save the token and such
    */

    //let config = { //can use for axios request if needed
       /*  headers:{
            'Authorization' : 'Bearer ' + localToken
        } */
    //}

    axios.post('/api/users/login', userData)
    .then((res)=>{
        const token = res.data.token;


        localStorage.setItem('jwtToken', token); //store token in browser memory so that user doesnt get logged out everytime they go to a new page
        setAuthToken(token);
        const decoded = jwt_decode(token); //decode so that we can get user data from the token
        dispatch(setCurrentUser(decoded));

        console.log('in loginuder action, res bracket for axioz');

    })
    .catch((err)=>{
        if(err.response === null){
            dispatch({
                type: GET_ERRORS,
                payload: null
            });
        }else{ //keep only the stuff in the else statement later
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        }
        
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
