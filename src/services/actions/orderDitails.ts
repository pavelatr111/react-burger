import { orderPost } from "../../utils/MainAPI"
import { AppDispatch } from "../types/types";
import { TOrder } from "../types/types-api";
export const POST__ORDER_REQUEST:'POST__ORDER_REQUEST' = 'POST__ORDER_REQUEST';
export const POST__ORDER_SUCCESS:'POST__ORDER_SUCCESS' = 'POST__ORDER_SUCCESS';
export const POST__ORDER_ERROR:'POST__ORDER_ERROR' = 'POST__ORDER_ERROR';
export const ORDER__POPUP:'ORDER__POPUP' = 'ORDER__POPUP';
export const RESET_ORDER:'RESET_ORDER' = 'RESET_ORDER';



export interface IPostOrderRequestAction {
  readonly type: typeof POST__ORDER_REQUEST;
}
export interface IPostOrderSuccessAction {
  readonly type: typeof POST__ORDER_SUCCESS;
  readonly payload: number;
}
export interface IPostOrderErrorAction {
  readonly type: typeof POST__ORDER_ERROR;
}

export interface IOrderPopup {
  readonly type: typeof ORDER__POPUP
}
export interface IResetOrder {
  readonly type: typeof RESET_ORDER;
}

export type TOrderUnionType =
|IPostOrderRequestAction
|IPostOrderSuccessAction
|IPostOrderErrorAction
|IOrderPopup
|IResetOrder

export function postOrderAction(data: string[]) {
  return function (dispatch: AppDispatch) {
    dispatch  ({
      type: POST__ORDER_REQUEST
    })
    orderPost(data)
      .then((res) => {
        dispatch ({
          type: POST__ORDER_SUCCESS,
          payload: res.order.number
        });
      })
      .catch((e) => {
        dispatch ({
          type: POST__ORDER_ERROR
        })
      })
  }
}

export const orderPopupAction = () => ({
  type: ORDER__POPUP
})

export const resetOrderAction = () => ({
  type: RESET_ORDER
})