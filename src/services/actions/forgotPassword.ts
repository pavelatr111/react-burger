import { forgotPassword } from "../../utils/MainAPI";
import { AppDispatch } from "../types/types";

export const FORGOT_PASSWORD_REQUEST:'FORGOT_PASSWORD_REQUEST' = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_SUCCESS: 'FORGOT_PASSWORD_SUCCESS' = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_ERROR:'FORGOT_PASSWORD_ERROR' = 'FORGOT_PASSWORD_ERROR';

export interface IForgotPasswordRequestAction {
    readonly type: typeof FORGOT_PASSWORD_REQUEST;
  }
  export interface IForgotPasswordSuccessAction {
    readonly type: typeof FORGOT_PASSWORD_SUCCESS;
    readonly payload: boolean
  }
  export interface IForgotPasswordErrorAction {
    readonly type: typeof FORGOT_PASSWORD_ERROR;
  }
  
export type TForgotPasswordUnionType = 
|IForgotPasswordRequestAction
|IForgotPasswordSuccessAction
|IForgotPasswordErrorAction

export function forgotPasswordActions(email: string) {
    return function (dispatch: AppDispatch) {
        dispatch  ({
            type: FORGOT_PASSWORD_REQUEST
        })
        forgotPassword(email)
            .then(({ success }) => {
                dispatch  ({
                    type: FORGOT_PASSWORD_SUCCESS,
                    payload: success
                });
            })
            .catch((e) => {
                dispatch  ({
                    type: FORGOT_PASSWORD_ERROR
                })
            })
    }
}