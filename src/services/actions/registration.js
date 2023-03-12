import { registration } from "../../utils/MainAPI";

export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_ERROR = 'REGISTRATION_ERROR';

export function registrationActions(name, email, password){
    return function (dispatch){
        dispatch({
            type: REGISTRATION_REQUEST
        })
        registration( name, password, email)
            .then((res) => {
                dispatch({
                    type: REGISTRATION_SUCCESS,
                    payload: res
                });
            })
            .catch((e) => {
                dispatch({
                    type: REGISTRATION_ERROR
                })
            })
    }
}