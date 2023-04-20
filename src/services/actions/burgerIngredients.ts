import { getIngredients } from "../../utils/MainAPI";
import { AppDispatch, TIngredientType } from "../types/types";


export const GET_INGREDIENTS_REQUEST: 'GET_INGREDIENTS_REQUEST' = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS: 'GET_INGREDIENTS_SUCCESS' = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_ERROR: 'GET_INGREDIENTS_ERROR' = 'GET_INGREDIENTS_ERROR';

export const CURRENT__TAB: 'CURRENT__TAB' = 'CURRENT__TAB'


export interface IGetIngredientsRequestAction {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
}
export interface IGetIngredientsSuccessAction {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly payload: Array<TIngredientType>;
}
export interface IGetIngredientsErrorAction {
  readonly type: typeof GET_INGREDIENTS_ERROR;
}

export interface ICurrentTabAction {
  readonly type: typeof CURRENT__TAB
  payload: string
}

export type TBurgerIngredientUnionType =
| IGetIngredientsRequestAction
| IGetIngredientsSuccessAction
| IGetIngredientsErrorAction
| ICurrentTabAction

export function getBurgerIngredients() {
  return function (dispatch: AppDispatch) {
    dispatch ({
      type: GET_INGREDIENTS_REQUEST
    })
    getIngredients()
      .then((res) => {
        dispatch  ({
          type: GET_INGREDIENTS_SUCCESS,
          payload: res.data
        });
      })
      .catch((e) => {
        dispatch  ({
          type: GET_INGREDIENTS_ERROR
        })
      })

  }
}

export const setCurrentTabAction = (payload: string) => ({
  type: CURRENT__TAB,
  payload
})