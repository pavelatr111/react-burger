import { getUser, updateUser } from "../../utils/MainAPI";

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_ERROR = 'GET_USER_ERROR';

export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_ERROR = 'UPDATE_USER_ERROR';

export function getUserActions( ){
    return function (dispatch){
        dispatch({
            type: GET_USER_REQUEST
        })
        getUser( )
        .then((data) => {
                dispatch({
                    type: GET_USER_SUCCESS,
                    payload: data
                });
            })
            .catch((e) => {
                dispatch({
                    type: GET_USER_ERROR
                })
            })
    }
}

export function updateUserActions( name, email, password){
    return function (dispatch){
        dispatch({
            type: UPDATE_USER_REQUEST
        })
        updateUser( name, email, password)
        .then((data) => {
                dispatch({
                    type: UPDATE_USER_SUCCESS,
                    payload: data
                });
            })
            .catch((e) => {
                dispatch({
                    type: UPDATE_USER_ERROR
                })
            })
    }
}