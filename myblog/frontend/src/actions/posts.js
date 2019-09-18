import API from "../API";

import config from '../config';
import {GET_POSTS, CREATE_POST, DELETE_POST, PATCH_POST} from "./types";

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

export const deletePost = id => dispatch => {
    myAPI.endpoints.posts.delete({id: id}).then(res => {
        dispatch({
            type: DELETE_POST,
            payload: id
        })
    }).catch(err => console.log(err))
};

export const createPost = post => dispatch => {
    myAPI.endpoints.posts.create(post).then(res => {
        dispatch({
            type: CREATE_POST,
            payload: res.data
        })
    }).catch(err => console.log(err));
};