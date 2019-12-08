import {SAVE_COMMENT} from 'actions/types';
import {GET_COMMENTS} from 'actions/types';

import axios from 'axios';

export function saveComment (comment) {
    return {
        type: SAVE_COMMENT,
        payload: comment
    };
}

export function getComments(){//placeholder data for now
    const response = axios.get('http://jsonplaceholder.typicode.com/comments');

    return {
        type: GET_COMMENTS,
        payload: response
    }

}