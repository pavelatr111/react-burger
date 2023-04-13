import { getUser, refreshToken, updateUser } from "../../utils/MainAPI";
import { getCookie, setCookie } from "../../utils/token";
import { AppDispatch } from "../types/types";
import { IPersonUser } from "../types/types-api";

export const GET_USER_REQUEST:"GET_USER_REQUEST" = "GET_USER_REQUEST";
export const GET_USER_SUCCESS:"GET_USER_SUCCESS" = "GET_USER_SUCCESS";
export const GET_USER_ERROR:"GET_USER_ERROR" = "GET_USER_ERROR";

export const UPDATE_USER_REQUEST:"UPDATE_USER_REQUEST" = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS:"UPDATE_USER_SUCCESS" = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_ERROR:"UPDATE_USER_ERROR" = "UPDATE_USER_ERROR";

export interface IGetUserRequestAction {
  readonly type: typeof GET_USER_REQUEST;
}
export interface IGetUserSuccessAction {
  readonly type: typeof GET_USER_SUCCESS;
  readonly payload: IPersonUser;
}
export interface IGetUserErrorAction {
  readonly type: typeof GET_USER_ERROR;
}
export interface IUpdateUserRequestAction {
  readonly type: typeof UPDATE_USER_REQUEST;
}
export interface IUpdateUserSuccessAction {
  readonly type: typeof UPDATE_USER_SUCCESS;
  readonly payload: IPersonUser;
}
export interface IUpdateUserErrorAction {
  readonly type: typeof UPDATE_USER_ERROR;
}

export type TUserUnionType =
|IGetUserRequestAction
|IGetUserSuccessAction
|IGetUserErrorAction
|IUpdateUserRequestAction
|IUpdateUserSuccessAction
|IUpdateUserErrorAction


export function getUserActions() {
  return function (dispatch:AppDispatch) {
    dispatch({
      type: GET_USER_REQUEST,
    });
    getUser()
      .then((data) => {
        dispatch({
          type: GET_USER_SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        // if (e.message === "jwt expired" || "jwt malformed") {
        //   setRefreshToken()
        // }
        console.log(e);
      });
  };
}

export function updateUserActions(name:string, email:string, password: string) {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: UPDATE_USER_REQUEST,
    });
    updateUser(name, email, password)
      .then((data) => {
        dispatch({
          type: UPDATE_USER_SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        dispatch({
          type: UPDATE_USER_ERROR,
        });
      });
  };
}

// export const setRefreshToken = () => {
//   return function () {
//     refreshToken().then((res) => {
//       setCookie("access", res.accessToken.split("Bearer ")[1]);
//       setCookie("refreshToken", res.refreshToken);
//       //   dispatch<any>(getUserActions());
//     });
//   };
// };
