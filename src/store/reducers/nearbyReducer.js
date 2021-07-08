import {

} from '../types';
import {GET_NEARBY_LOADING} from "../types";
import {GET_NEARBY_SUCCESS} from "../types";
import {GET_NEARBY_FAIL} from "../types";

const initialState = {
    nearby: null,
    isLoading: false,
    error: null,
};


export default function (state = initialState, { type, payload }) {
    switch (type) {
        case GET_NEARBY_LOADING:
            return {
                ...state,
                isLoading: true,
            };

        case GET_NEARBY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                nearby: payload.nearby,
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
