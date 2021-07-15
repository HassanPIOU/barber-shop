import {GET_REVIEWS_FAIL, GET_REVIEWS_LOADING, GET_REVIEWS_SUCCESS} from "../types";


const initialState = {
    reviews: null,
    isLoading: false,
    error: null,
};


export default function (state = initialState, { type, payload }) {
    switch (type) {
        case GET_REVIEWS_LOADING:
            return {
                ...state,
                isLoading: true,
            };

        case GET_REVIEWS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                reviews: payload.reviews,
            };

        case GET_REVIEWS_FAIL:
            return {
                ...state,
                isLoading: false,
                error: payload.error,
            };

        default:
            return state;
    }
}
