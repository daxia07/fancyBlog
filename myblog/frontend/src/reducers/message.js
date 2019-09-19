import {SEND_MESSAGE} from "../actions/types";

const initialState = {
    message: ''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                message: action.payload
            };
        default:
            return state;
    }
}
