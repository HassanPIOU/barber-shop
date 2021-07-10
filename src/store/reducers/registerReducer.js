import {
  REGISTER_WITH_EMAIL_LOADING,
  REGISTER_WITH_EMAIL_SUCCESS,
  REGISTER_WITH_EMAIL_FAIL,
} from '../types';

const initialState = {
  success : null,
  isLoading: false,
  error: null,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case REGISTER_WITH_EMAIL_LOADING:
      return {
        ...state,
        isLoading: true,
          success: null,
        error: null,
      };
    case REGISTER_WITH_EMAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
          success: payload.success,
        error: null,
      };
    case REGISTER_WITH_EMAIL_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };
    default:
      return state;
  }
}
