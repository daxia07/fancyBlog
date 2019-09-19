import {combineReducers} from "redux";
import posts from './posts';
import errors from './errors';
import message from "./message";


export default combineReducers({
    postsReducer: posts,
    errorsReducer: errors,
    messageReducer: message
});