import {
    ADD_BOOKING_FAIL, ADD_BOOKING_LOADING,
    ADD_BOOKING_SUCCESS
} from "../types";


const initialState = {
    status: null,
    isLoading: false,
    error: null,
};


export default function (state = initialState, { type, payload }) {
    switch (type) {
        case ADD_BOOKING_LOADING:
            return {
                ...state,
                isLoading: true,
            };

        case ADD_BOOKING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                status : payload.status,
            };

        case ADD_BOOKING_FAIL:
            return {
                ...state,
                isLoading: false,
                error: payload.error,
            };

        default:
            return state;
    }
}
