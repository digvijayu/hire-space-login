import { combineReducers } from "redux";

import { LOGIN_REQUESTED, LOGIN_SUCCESS, LOGIN_FAILED } from "./actions";

const initialState = {
  loginProcessing: false,
  token: null,
  loginError: null,
};

const appState = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUESTED: {
      return {
        ...state,
        loginProcessing: true,
      };
    }
    case LOGIN_SUCCESS: {
      const { token } = action.payload;
      return {
        ...state,
        loginProcessing: false,
        token,
      };
    }
    case LOGIN_FAILED: {
      const { error } = action.payload;
      return {
        ...state,
        loginError: error,
      };
    }
    default:
      return state;
  }
};

export default combineReducers({ appState });
