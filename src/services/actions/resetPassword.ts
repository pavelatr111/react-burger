import { resetPassword } from "../../utils/MainAPI";
import { AppDispatch } from "../types/types";


export const RESET_PASSWORD_REQUEST:'RESET_PASSWORD_REQUEST' = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS:'RESET_PASSWORD_SUCCESS' = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_ERROR:'RESET_PASSWORD_ERROR' = 'RESET_PASSWORD_ERROR';

export interface IResetPasswordRequestAction {
    readonly type: typeof RESET_PASSWORD_REQUEST;
  }
  export interface IResetPasswordSuccessAction {
    readonly type: typeof RESET_PASSWORD_SUCCESS;
    readonly payload: boolean;
  }
  export interface IResetPasswordErrorAction {
    readonly type: typeof RESET_PASSWORD_ERROR;
  }

  export type TResetPasswordUnionType =
  |IResetPasswordRequestAction
  |IResetPasswordSuccessAction
  |IResetPasswordErrorAction

export function resetPasswordActions(password: string, token: string) {
    return function (dispatch: AppDispatch) {
        dispatch  ({
            type: RESET_PASSWORD_REQUEST
        })
        resetPassword(password, token)
            .then(({ success }) => {
                console.log(success);
                
                dispatch  ({
                    type: RESET_PASSWORD_SUCCESS,
                    payload: success
                });
            })
            .catch((e) => {
                dispatch ({
                    type: RESET_PASSWORD_ERROR
                })
            })
    }
}