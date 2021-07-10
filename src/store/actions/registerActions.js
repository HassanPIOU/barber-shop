import axios from 'axios';

import {
  REGISTER_WITH_EMAIL_LOADING,
  REGISTER_WITH_EMAIL_SUCCESS,
  REGISTER_WITH_EMAIL_FAIL,
} from '../types';
import {SERVER_URL} from "../../base/app";

export const registerUserWithEmail = (formData, history) => async (dispatch, getState) => {
  dispatch({ type: REGISTER_WITH_EMAIL_LOADING });
  try {
    await axios.post(SERVER_URL+'register', formData);
    dispatch({
      type: REGISTER_WITH_EMAIL_SUCCESS,
        payload : {success : "success"}
    });

    setTimeout(() => {
        history.push('/login');
    },3000)

  } catch (err) {
    dispatch({
      type: REGISTER_WITH_EMAIL_FAIL,
      payload: { error: err?.response?.data.message || err.message },
    });
  }
};
