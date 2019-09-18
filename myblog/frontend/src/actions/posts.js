import API from "../API";

import config from '../config';
import {GET_POSTS} from "./types";

const myAPI = new API({url: config.url});
myAPI.createEntity({ name : 'posts' });

export const getPosts = () => dispatch => {
    myAPI.endpoints.posts.getAll('').then(res => {
        dispatch({
            type: GET_POSTS,
            payload: res.data
        })
    }).catch(err => console.log(err))
};