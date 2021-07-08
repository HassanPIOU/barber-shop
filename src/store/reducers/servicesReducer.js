import {GET_SERVICES_FAIL, GET_SERVICES_LOADING, GET_SERVICES_SUCCESS} from "../types";

const initialState = {
    services: null,
    isLoading: false,
    error: null,
};


export default function (state = initialState, { type, payload }) {
    switch (type) {
        case GET_SERVICES_LOADING:
            return {
                ...state,
                isLoading: true,
            };

        case GET_SERVICES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                services: payload.services,
            };

        case GET_SERVICES_FAIL:
            return {
                ...state,
                isLoading: false,
                error: payload.error,
            };

        default:
            return state;
    }
}
