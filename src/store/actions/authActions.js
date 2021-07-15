import axios from 'axios';


import {
    LOGIN_WITH_OAUTH_LOADING,
    LOGIN_WITH_OAUTH_SUCCESS,
    LOGIN_WITH_OAUTH_FAIL,
    LOGOUT_SUCCESS,
    LOGIN_WITH_EMAIL_LOADING,
    LOGIN_WITH_EMAIL_SUCCESS,
    LOGIN_WITH_EMAIL_FAIL,
    ME_LOADING,
    ME_SUCCESS,
    ME_FAIL, LOGOUT_LOADING, DELETE_SERVICE_SUCCESS, DELETE_SERVICE_FAIL, DELETE_SERVICE_LOADING, LOGOUT_FAIL,
} from '../types';
import {SERVER_URL} from "../../base/app";

export const loadMe = () => async (dispatch, getState) => {
  dispatch({ type: ME_LOADING });

  try {
    const options = attachTokenToHeaders(getState);
    const response = await axios.get(SERVER_URL+'user', options);


    dispatch({
      type: ME_SUCCESS,
      payload: { me: response.data.data },
    });
  } catch (err) {
    dispatch({
      type: ME_FAIL,
      payload: { error: err },
    });
  }
};

export const loginUserWithEmail = (formData, history) => async (dispatch, getState) => {
  dispatch({ type: LOGIN_WITH_EMAIL_LOADING });
  try {
    const send = await axios.post(SERVER_URL+'login', formData);

    const response  = send.data
    const statut = response.status

      if (statut == "error"){
          dispatch({
              type: LOGIN_WITH_EMAIL_FAIL,
              payload: { error : response.message },
          });

      }else{
          dispatch({
              type: LOGIN_WITH_EMAIL_SUCCESS,
              payload: { token: response.data.token, me: response.data.user },
          });
          dispatch(loadMe);
          console.log(response.data)
         history.push('/booking');
      }


  } catch (err) {
    dispatch({
      type: LOGIN_WITH_EMAIL_FAIL,
      payload: { error: err.message },
    });
  }
};

export const logInUserWithOauth = (token) => async (dispatch, getState) => {
  dispatch({ type: LOGIN_WITH_OAUTH_LOADING });

  try {
    const headers = {
      'Content-Type': 'application/json',
      'token': token,
    };

    const response = await axios.get('login', { headers });

    dispatch({
      type: LOGIN_WITH_OAUTH_SUCCESS,
      payload: { me: response.data.me, token },
    });
  } catch (err) {
    dispatch({
      type: LOGIN_WITH_OAUTH_FAIL,
      payload: { error: err.response.data.message },
    });
  }
};



export const logOutUser = (history) => async (dispatch,getState) => {
    dispatch({
        type: LOGOUT_LOADING,
    });
    try {
        const options = attachTokenToHeaders(getState);
        const response = await axios.get(SERVER_URL+"logout",options);

        console.log(response)
        dispatch({
            type: LOGOUT_SUCCESS,
            payload: { message: response.data.message },
        });

        history.push("login")

        deleteAllCookies()

    } catch (err) {
        dispatch({
            type: LOGOUT_FAIL,
            payload: { error: err?.response?.data.message || err.message },
        });
    }
};




function deleteAllCookies() {
  var cookies = document.cookie.split(';');

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf('=');
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
  }
}

export const attachTokenToHeaders = (getState) => {
  const token = getState().auth.token;


  const config = {
    headers: {
      'Content-type': 'application/json',
     'content-type': 'multipart/form-data'
    },
  };

  if (token) {
    config.headers['Authorization'] = "Bearer " +token;
  }
  return config;
};


