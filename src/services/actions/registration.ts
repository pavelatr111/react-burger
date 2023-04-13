import { registration } from "../../utils/MainAPI";
import { AppDispatch } from "../types/types";
import {  IToken } from "../types/types-api";

export const REGISTRATION_REQUEST:'REGISTRATION_REQUEST' = 'REGISTRATION_REQUEST';
export const REGISTRATION_SUCCESS: 'REGISTRATION_SUCCESS' = 'REGISTRATION_SUCCESS';
export const REGISTRATION_ERROR: 'REGISTRATION_ERROR' = 'REGISTRATION_ERROR';


export interface IRegistrationRequestAction {
    readonly type: typeof REGISTRATION_REQUEST;
  }
  export interface IRegistrationSuccessAction {
    readonly type: typeof REGISTRATION_SUCCESS;
    readonly payload: IToken;
  }
  export interface IRegistrationErrorAction {
    readonly type: typeof REGISTRATION_ERROR;
  }

  export type TRegistrationUnionType =
  |IRegistrationRequestAction
  |IRegistrationSuccessAction
  |IRegistrationErrorAction

export function registrationActions(name: string, email: string, password:string) {
    return function (dispatch: AppDispatch) {
        dispatch  ({
            type: REGISTRATION_REQUEST
        })
        registration(name, password, email)
            .then((res) => {
                dispatch ({
                    type: REGISTRATION_SUCCESS,
                    payload: res
                });
            })
            .catch((e) => {
                dispatch ({
                    type: REGISTRATION_ERROR
                })
            })
    }
}