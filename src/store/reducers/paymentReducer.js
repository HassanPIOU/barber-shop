import {SEND_PAYMENT_FAIL, SEND_PAYMENT_LOADING, SEND_PAYMENT_SUCCESS} from "../types";


const initialState = {
    key_token: null,
    isLoading: false,
    error: null,
};


export default function (state = initialState, { type, payload }) {
    switch (type) {
        case SEND_PAYMENT_LOADING:
            return {
                ...state,
                isLoading: true,
            };

        case SEND_PAYMENT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                key_token: payload.key_token,
            };

        case SEND_PAYMENT_FAIL:
            return {
                ...state,
                isLoading: false,
                error: payload.error,
            };

        default:
            return state;
    }
}
