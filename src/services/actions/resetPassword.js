import { resetPassword } from "../../utils/MainAPI";


export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_ERROR = 'RESET_PASSWORD_ERROR';

export function resetPasswordActions(password, token){
    return function (dispatch){
        dispatch({
            type: RESET_PASSWORD_REQUEST
        })
        resetPassword(password,token)
            .then(({success}) => {
                dispatch({
                    type: RESET_PASSWORD_SUCCESS,
                    payload: success
                });
            })
            .catch((e) => {
                dispatch({
                    type: RESET_PASSWORD_ERROR
                })
            })
    }
}