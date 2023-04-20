import { getOrderInfo, orderPost } from "../../utils/MainAPI"
import { AppDispatch } from "../types/types";
import { TwsOrderType } from "../types/types-api";

export const POST__ORDER_REQUEST:'POST__ORDER_REQUEST' = 'POST__ORDER_REQUEST';
export const POST__ORDER_SUCCESS:'POST__ORDER_SUCCESS' = 'POST__ORDER_SUCCESS';
export const POST__ORDER_ERROR:'POST__ORDER_ERROR' = 'POST__ORDER_ERROR';
export const ORDER__POPUP:'ORDER__POPUP' = 'ORDER__POPUP';
export const RESET_ORDER:'RESET_ORDER' = 'RESET_ORDER';
export const GET_ORDER_REQUEST:'GET_ORDER_REQUEST' = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS:'GET_ORDER_SUCCESS' = 'GET_ORDER_SUCCESS';
export const GET_ORDER_ERROR:'GET_ORDER_ERROR' = 'GET_ORDER_ERROR';




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

export interface IGetOrderRequestAction {
  readonly type: typeof GET_ORDER_REQUEST;
}
export interface IGetOrderSuccessAction {
  readonly type: typeof GET_ORDER_SUCCESS;
  readonly payload: TwsOrderType;
}
export interface IGetOrderErrorAction {
  readonly type: typeof GET_ORDER_ERROR;
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
|IGetOrderRequestAction
|IGetOrderSuccessAction
|IGetOrderErrorAction

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
export function getOrderAction (numberOrder: string | undefined){
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_ORDER_REQUEST
    })
    getOrderInfo(numberOrder)
    .then(result => {
        dispatch({
          type: GET_ORDER_SUCCESS,
          payload: result.orders[0]
        });
    })
    .catch(error => {
      dispatch({
        type: GET_ORDER_ERROR
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