import axios from 'axios';

import {
    DELETE_SERVICE_FAIL,
    DELETE_SERVICE_LOADING,
    DELETE_SERVICE_SUCCESS,
    GET_INVOICE_FAIL,
    GET_INVOICE_LOADING,
    GET_INVOICE_SUCCESS, GET_PAYMENT_FAIL,
    GET_PAYMENT_LOADING,
    GET_PAYMENT_SUCCESS,
    GET_REVIEWS_FAIL,
    GET_REVIEWS_LOADING,
    GET_REVIEWS_SUCCESS,
    NEW_SERVICE_FAIL,
    NEW_SERVICE_LOADING,
    NEW_SERVICE_SUCCESS,
    SET_DONE_FAIL,
    SET_DONE_LOADING,
    SET_DONE_SUCCESS,
    SET_RATING_FAIL,
    SET_RATING_LOADING,
    SET_RATING_SUCCESS,
    UPDATE_SERVICE_FAIL,
    UPDATE_SERVICE_LOADING,
    UPDATE_SERVICE_SUCCESS, UPDATE_USER_FAIL, UPDATE_USER_LOADING, UPDATE_USER_SUCCESS
} from "../types";


import {SERVER_URL} from "../../base/app";
import { attachTokenToHeaders } from './authActions';

export const getInvoices = (data) => async (dispatch,getState) => {
    dispatch({
        type: GET_INVOICE_LOADING,
    });
    try {
        const options = attachTokenToHeaders(getState);
        const response = await axios.post(SERVER_URL+'invoices',data,options);

        console.log(response)
        dispatch({
            type: GET_INVOICE_SUCCESS,
            payload: { invoices: response.data.data },
        });
    } catch (err) {
        dispatch({
            type: GET_INVOICE_FAIL,
            payload: { error: err?.response?.data.message || err.message },
        });
    }
};

export const setRating = (data) => async (dispatch,getState) => {
    dispatch({
        type: SET_RATING_LOADING,
    });
    try {
        const options = attachTokenToHeaders(getState);
        const response = await axios.post(SERVER_URL+'rating',data,options);

        console.log(response)
        dispatch({
            type: SET_RATING_SUCCESS,
            payload: { rating: response.data.data },
        });
    } catch (err) {
        dispatch({
            type: SET_RATING_FAIL,
            payload: { error: err?.response?.data.message || err.message },
        });
    }
};

export const completBooking = (data) => async (dispatch,getState) => {
    dispatch({
        type: SET_DONE_LOADING,
    });
    try {
        const options = attachTokenToHeaders(getState);
        const response = await axios.post(SERVER_URL+'rating',data,options);

        console.log(response)
        dispatch({
            type: SET_DONE_SUCCESS,
            payload: { done: response.data.data },
        });
    } catch (err) {
        dispatch({
            type: SET_DONE_FAIL,
            payload: { error: err?.response?.data.message || err.message },
        });
    }
};

export const addnewservice = (data) => async (dispatch,getState) => {
    dispatch({
        type: NEW_SERVICE_LOADING,
    });
    try {
        const options = attachTokenToHeaders(getState);
        const response = await axios.post(SERVER_URL+'services',data,options);

        console.log(response)
        dispatch({
            type: NEW_SERVICE_SUCCESS,
            payload: { service: response.data.data },
        });
    } catch (err) {
        dispatch({
            type: NEW_SERVICE_FAIL,
            payload: { error: err?.response?.data.message || err.message },
        });
    }
};

export const deleteservice = (id) => async (dispatch,getState) => {
    dispatch({
        type: DELETE_SERVICE_LOADING,
    });
    try {
        const options = attachTokenToHeaders(getState);
        const response = await axios.delete(SERVER_URL+id+'/destroy',options);

        console.log(response)
        dispatch({
            type: DELETE_SERVICE_SUCCESS,
            payload: { delete: response.data.data },
        });
    } catch (err) {
        dispatch({
            type: DELETE_SERVICE_FAIL,
            payload: { error: err?.response?.data.message || err.message },
        });
    }
};

export const updateservice = (data) => async (dispatch,getState) => {
    dispatch({
        type: UPDATE_SERVICE_LOADING,
    });
    try {
        const options = attachTokenToHeaders(getState);
        const response = await axios.put(SERVER_URL+'services/'+data.id+'/update',data,options);

        console.log(response)
        dispatch({
            type: UPDATE_SERVICE_SUCCESS,
            payload: { update: response.data.data },
        });
    } catch (err) {
        dispatch({
            type: UPDATE_SERVICE_FAIL,
            payload: { error: err?.response?.data.message || err.message },
        });
    }
};


export const getReviews = () => async (dispatch,getState) => {
    dispatch({
        type: GET_REVIEWS_LOADING,
    });
    try {
        const options = attachTokenToHeaders(getState);
        const response = await axios.get(SERVER_URL+'barber/ratings',options);

        console.log(response)
        dispatch({
            type: GET_REVIEWS_SUCCESS,
            payload: { reviews: response.data.data },
        });
    } catch (err) {
        dispatch({
            type: GET_REVIEWS_FAIL,
            payload: { error: err?.response?.data.message || err.message },
        });
    }
};

export const getPayment = () => async (dispatch,getState) => {
    dispatch({
        type: GET_PAYMENT_LOADING,
    });
    try {
        const options = attachTokenToHeaders(getState);
        const response = await axios.get(SERVER_URL+'payment',options);

        dispatch({
            type: GET_PAYMENT_SUCCESS,
            payload: { payments: response.data.data },
        });
    } catch (err) {
        dispatch({
            type: GET_PAYMENT_FAIL,
            payload: { error: err?.response?.data.message || err.message },
        });
    }
};


export const UpdatemyInfo = (data) => async (dispatch,getState) => {
    dispatch({
        type: UPDATE_USER_LOADING,
    });
    try {


        const options = attachTokenToHeaders(getState);
        const response = await axios.post(SERVER_URL+'user/update',data,options);

        dispatch({
            type: UPDATE_USER_SUCCESS,
            payload: { user : response.data.data },
        });
    } catch (err) {
        dispatch({
            type: UPDATE_USER_FAIL,
            payload: { error: err?.response?.data.message || err.message },
        });
    }
};

