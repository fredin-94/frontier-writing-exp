import {combineReducers} from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import commentsReducer from './commentsReducer';

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    comments: commentsReducer
});