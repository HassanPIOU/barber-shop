import {UPDATE_USER_FAIL, UPDATE_USER_LOADING, UPDATE_USER_SUCCESS} from "../types";


const initialState = {
    user: null,
    isLoading: false,
    error: null,
};


export default function (state = initialState, { type, payload }) {
    switch (type) {
        case UPDATE_USER_LOADING:
            return {
                ...state,
                isLoading: true,
            };

        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: payload.user,
            };

        case UPDATE_USER_FAIL:
            return {
                ...state,
                isLoading: false,
                error: payload.error,
            };

        default:
            return state;
    }
}
