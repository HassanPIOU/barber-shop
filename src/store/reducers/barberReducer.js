import {

} from '../types';
import {GET_BARBER_LOADING} from "../types";
import {GET_BARBER_SUCCESS} from "../types";
import {GET_BARBER_FAIL} from "../types";

const initialState = {
    barbers: null,
    isLoading: false,
    error: null,
};


export default function (state = initialState, { type, payload }) {
    switch (type) {
        case GET_BARBER_LOADING:
            return {
                ...state,
                isLoading: true,
            };

        case GET_BARBER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                barbers: payload.barbers,
            };

        case GET_BARBER_FAIL:
            return {
                ...state,
                isLoading: false,
                error: payload.error,
            };

        default:
            return state;
    }
}
