import { login, logout } from "../../utils/MainAPI";
import { deleteCookie, setCookie } from "../../utils/token";
import { AppDispatch } from "../types/types";
import {  IPersonInfoUser, IPersonUser, IResponseBody, ITokenResponse } from "../types/types-api";

export const LOGIN_REQUEST: "LOGIN_REQUEST" = "LOGIN_REQUEST";
export const LOGIN_SUCCESS: "LOGIN_SUCCESS" = "LOGIN_SUCCESS";
export const LOGIN_ERROR: "LOGIN_ERROR" = "LOGIN_ERROR";

export const LOGOUT_REQUEST: "LOGOUT_REQUEST" = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS: "LOGOUT_SUCCESS" = "LOGOUT_SUCCESS";
export const LOGOUT_ERROR: "LOGOUT_ERROR" = "LOGOUT_ERROR";



export interface ILoginRequestAction {
  readonly type: typeof LOGIN_REQUEST;
}
export interface ILoginSuccessAction {
  readonly type: typeof LOGIN_SUCCESS;
  readonly payload: IPersonInfoUser;
}
export interface ILoginErrorAction {
  readonly type: typeof LOGIN_ERROR;
}


export interface ILogoutRequestAction {
  readonly type: typeof LOGOUT_REQUEST;
}
export interface ILogoutSuccessAction {
  readonly type: typeof LOGOUT_SUCCESS;
  readonly payload: IResponseBody;
}
export interface ILogoutErrorAction {
  readonly type: typeof LOGOUT_ERROR;
}

export type TLoginUionType =
|ILoginRequestAction
|ILoginSuccessAction
|ILoginErrorAction
|ILogoutRequestAction
|ILogoutSuccessAction
|ILogoutErrorAction




export function loginActions(email: string, password: string) {
  return function (dispatch: AppDispatch) {
    dispatch 
     ( {
        type: LOGIN_REQUEST,
      });
    login(email, password)
      .then((res) => {
        const { success, refreshToken, accessToken } = res;
        if (success) {
          setCookie("access", accessToken.split("Bearer ")[1]);
          setCookie("refreshToken", refreshToken);
        }
        dispatch 
          ({
            type: LOGIN_SUCCESS,
            payload: res.user,
          });
      })
      .catch((e) => {
        dispatch 
         ( {
            type: LOGIN_ERROR,
          });
      });
  };
}

export function logoutActions() {
  return function (dispatch:AppDispatch) {
    dispatch
      ({
        type: LOGOUT_REQUEST,
      });
    logout()
      .then((res) => {
        if (res) {
          deleteCookie("access");
          deleteCookie("refreshToken");
        }
        dispatch 
          ({
            type: LOGOUT_SUCCESS,
            payload: res,
          });
      })
      .catch((e) => {
        dispatch 
          ({
            type: LOGOUT_ERROR,
          });
      });
  };
}
