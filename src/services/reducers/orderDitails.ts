import {
  ORDER__POPUP,
  POST__ORDER_ERROR,
  POST__ORDER_REQUEST,
  POST__ORDER_SUCCESS,
  RESET_ORDER,
  TOrderUnionType,
} from "../actions/orderDitails";
import { TIngredientType } from "../types/types";
import { IPersonInfoUser, TOrder } from "../types/types-api";



type TInitialState = {
  feedRequest: boolean;
  feedFailed: boolean;
  order: number | null;
  orderPopupShow: boolean;
};

const initialState: TInitialState = {
  feedRequest: false,
  feedFailed: false,
  order: null,
  orderPopupShow: false,
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
        order: action.payload,
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
        order: null,
        feedRequest: false,
        feedFailed: false,
        orderPopupShow: false,
      };
    }
    default: {
      return state;
    }
  }
};
