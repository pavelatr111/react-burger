import { GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS } from "../actions/burgerIngredients";
import {
  GET_ORDER_ERROR,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  ORDER__POPUP,
  POST__ORDER_ERROR,
  POST__ORDER_REQUEST,
  POST__ORDER_SUCCESS,
  RESET_ORDER,
  TOrderUnionType,
} from "../actions/orderDitails";
import { TIngredientType } from "../types/types";
import { IPersonInfoUser, TOrder, TwsOrderType } from "../types/types-api";



type TInitialState = {
  feedRequest: boolean;
  feedFailed: boolean;
  orders: number | null;
  orderPopupShow: boolean;
  orderInformation: TwsOrderType | null;
  orderInfoRequest: boolean;
  orderInfoFailed: boolean;
};

const initialState: TInitialState = {
  feedRequest: false,
  feedFailed: false,
  orders: 0,
  orderPopupShow: false,
  orderInformation: null,
  orderInfoRequest: false,
  orderInfoFailed: false
  
};

export const orderReducer = (
  state = initialState,
  action: TOrderUnionType
): TInitialState => {
  switch (action.type) {
    case POST__ORDER_REQUEST: {
      return {
        ...state,
        feedRequest: true,
      };
    }
    case POST__ORDER_SUCCESS: {
      return {
        ...state,
        orders: action.payload,
        feedRequest: false,
        feedFailed: false,
      };
    }
    case POST__ORDER_ERROR: {
      return {
        ...state,
        feedRequest: false,
        feedFailed: true,
      };
    }
    case ORDER__POPUP: {
      return {
        ...state,
        orderPopupShow: !state.orderPopupShow,
      };
    }
    case RESET_ORDER: {
      return {
        ...state,
        orders: null,
        feedRequest: false,
        feedFailed: false,
        orderPopupShow: false,
      };
    }
    case GET_ORDER_REQUEST: {
      return {
        ...state,
        orderInfoRequest: true,
        orderInfoFailed: false
      };
    }
    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        orderInformation: action.payload,
        orderInfoFailed: false,
        orderInfoRequest: false
      };
    }
    case GET_ORDER_ERROR: {
      return {
        ...state,
        orderInfoFailed: true,
        orderInfoRequest: false
      };
    }
    default: {
      return state;
    }
  }
};
