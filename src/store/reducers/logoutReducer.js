import {
  LOGOUT_SUCCESS,
} from '../types';

const initialState = {
    message: null,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {

    case LOGOUT_SUCCESS:
      return {
        ...state,
          message: payload.message,
      };


    default:
      return state;
  }
}
