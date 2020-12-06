import { Dispatch } from "redux";
import axios, { AxiosResponse } from "axios";

type LoginResponse = {
  token: string;
};

export const LOGIN_REQUESTED = "LOGIN_REQUESTED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const loginRequested = (email: string, password: string) => ({
  type: LOGIN_REQUESTED,
  payload: {
    email,
    password,
  },
});

export const loginSuccess = (token: string) => ({
  type: LOGIN_SUCCESS,
  payload: { token },
});

export const loginFailed = (error: string) => ({
  type: LOGIN_FAILED,
  payload: { error },
});

export const login = (email: string, password: string) => {
  return function (dispatch: Dispatch) {
    dispatch(loginRequested(email, password));
    return axios.post("http://localhost:3001/login", { email, password }).then(
      (res) => dispatch(loginSuccess(res.token)),
      (error) => dispatch(loginFailed(error))
    );
  };
};
