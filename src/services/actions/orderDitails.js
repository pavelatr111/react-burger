import { orderPost } from "../../utils/MainAPI"
export const POST__ORDER_REQUEST = 'POST__ORDER_REQUEST';
export const POST__ORDER_SUCCESS = 'POST__ORDER_SUCCESS';
export const POST__ORDER_ERROR = 'POST__ORDER_ERROR';
export const ORDER__POPUP = 'ORDER__POPUP';
export const RESET_ORDER = 'RESET_ORDER';



export function postOrderAction(data) {
  return function (dispatch) {
    dispatch  ({
      type: POST__ORDER_REQUEST
    })
    orderPost(data)
      .then((res) => {
        dispatch ({
          type: POST__ORDER_SUCCESS,
          payload: res.order
        });
      })
      .catch((e) => {
        dispatch ({
          type: POST__ORDER_ERROR
        })
      })
  }
}

export const orderPopupAction = (payload) => ({
  type: ORDER__POPUP
})

export const resetOrderAction = (payload) => ({
  type: RESET_ORDER
})