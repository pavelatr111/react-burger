import { login, logout } from "../../utils/MainAPI";
import { deleteCookie, setCookie } from "../../utils/token";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';

export function loginActions( email, password){
    return function (dispatch){
        dispatch({
            type: LOGIN_REQUEST
        })
        login( email, password)
            .then((res) => {
                const { success, refreshToken, accessToken } = res
                if (success) {
                    setCookie('access', accessToken.split('Bearer ')[1]);
                    setCookie('refreshToken', refreshToken);
                }
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: res
                });
            })
            .catch((e) => {
                dispatch({
                    type: LOGIN_ERROR
                })
            })
    }
}
export function logoutActions( ){
    return function (dispatch){
        dispatch({
            type: LOGOUT_REQUEST
        })
        logout()
        .then((res) => {
            if (res) {
                deleteCookie('access');
                deleteCookie('refreshToken');
            }
                dispatch({
                    type: LOGOUT_SUCCESS,
                    payload: res
                });
            })
            .catch((e) => {
                dispatch({
                    type: LOGOUT_ERROR
                })
            })
    }
}