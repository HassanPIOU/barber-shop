import {GET_NEARBY_FAIL, GET_TIMES_LOADING, GET_TIMES_SUCCESS} from "../types";


const initialState = {
    times: null,
    isLoading: false,
    error: null,
};


export default function (state = initialState, { type, payload }) {
    switch (type) {
        case GET_TIMES_LOADING:
            return {
                ...state,
                isLoading: true,
            };

        case GET_TIMES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                times : payload.times,
            };

        case GET_NEARBY_FAIL:
            return {
                ...state,
                isLoading: false,
                error: payload.error,
            };

        default:
            return state;
    }
}
