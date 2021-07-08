import {
    GET_SHOP_LOADING,
    GET_SHOP_SUCCESS,
    GET_SHOP_FAIL,
} from '../types';

const initialState = {
    shop: null,
    isLoading: false,
    error: null,
};


export default function (state = initialState, { type, payload }) {
    switch (type) {
        case GET_SHOP_LOADING:
            return {
                ...state,
                isLoading: true,
            };

        case GET_SHOP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                shop: payload.shop,
            };

        case GET_SHOP_FAIL:
            return {
                ...state,
                isLoading: false,
                error: payload.error,
            };

        default:
            return state;
    }
}
