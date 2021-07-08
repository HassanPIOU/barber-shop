import axios from 'axios';

import {
    GET_SHOP_LOADING,
    GET_SHOP_SUCCESS,
    GET_SHOP_FAIL,
    GET_NEARBY_LOADING,
    GET_NEARBY_SUCCESS,
    GET_NEARBY_FAIL,
    GET_BARBER_LOADING,
    GET_BARBER_FAIL,
    GET_BARBER_SUCCESS, GET_SERVICES_FAIL, GET_SERVICES_SUCCESS, GET_SERVICES_LOADING,

} from '../types';
import {SERVER_URL} from "../../base/app";
import { attachTokenToHeaders } from './authActions';

export const getShop = () => async (dispatch) => {
    dispatch({
        type: GET_SHOP_LOADING,
    });
    try {
        const response = await axios.get(SERVER_URL+'shops');

        console.log(response)
        dispatch({
            type: GET_SHOP_SUCCESS,
            payload: { shop: response.data.data },
        });
    } catch (err) {
        dispatch({
            type: GET_SHOP_FAIL,
            payload: { error: err?.response?.data.message || err.message },
        });
    }
};

export const nearbyShop = (data) => async (dispatch,getState) => {
    dispatch({
        type: GET_NEARBY_LOADING,
    });
    try {
        console.log(data)

        const options = attachTokenToHeaders(getState);
        const response = await axios.post(SERVER_URL+'shops/nearest-points',data,options);

        console.log(response.data)

        if (response.data.status == "error"){
            dispatch({
                type: GET_NEARBY_FAIL,
                payload: { error: response.data.error  },
            });
        } else{

        }

        dispatch({
            type: GET_NEARBY_SUCCESS,
            payload: { nearby: response.data.data },
        });
    } catch (err) {
        dispatch({
            type: GET_NEARBY_FAIL,
            payload: { error: err?.response?.data.message || err.message },
        });
    }
};

export const barberList = (id) => async (dispatch,getState) => {
    dispatch({
        type: GET_BARBER_LOADING,
    });
    try {

        const options = attachTokenToHeaders(getState);
        const response = await axios.get(SERVER_URL+'shops/'+id+'/barbers',options);

        console.log(response.data)

        if (response.data.status == "error"){
            dispatch({
                type: GET_BARBER_FAIL,
                payload: { error: response.data.error  },
            });
        } else{

        }

        dispatch({
            type: GET_BARBER_SUCCESS,
            payload: { barbers: response.data.data },
        });
    } catch (err) {
        dispatch({
            type: GET_NEARBY_FAIL,
            payload: { error: err?.response?.data.message || err.message },
        });
    }
};

export const serviceList = (id) => async (dispatch,getState) => {
    dispatch({
        type: GET_SERVICES_LOADING,
    });
    try {

        const options = attachTokenToHeaders(getState);
        const response = await axios.get(SERVER_URL+'barbers/'+id+'/services',options);

        console.log(response.data)

        if (response.data.status == "error"){
            dispatch({
                type: GET_SERVICES_FAIL,
                payload: { error: response.data.error  },
            });
        } else{

        }

        dispatch({
            type: GET_SERVICES_SUCCESS,
            payload: { services: response.data.data },
        });
    } catch (err) {
        dispatch({
            type: GET_SERVICES_FAIL,
            payload: { error: err?.response?.data.message || err.message },
        });
    }
};


