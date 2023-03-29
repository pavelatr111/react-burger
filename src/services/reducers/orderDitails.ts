import {
  ORDER__POPUP,
  POST__ORDER_ERROR,
  POST__ORDER_REQUEST,
  POST__ORDER_SUCCESS,
  RESET_ORDER,
} from "../actions/orderDitails";
import { TIngredientType } from "../types/types";
import { IPersonInfoUser } from "../types/types-api";

type TOrder = {
  createdAt: string;
  ingredients: Array<TIngredientType>;
  name: string;
  number: number;
  owner: IPersonInfoUser;
  price: number;
  status: string;
  updatedAt: string;
  _id: string;
};

type TInitialState = {
  feedRequest: boolean;
  feedFailed: boolean;
  order: TOrder | null;
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
  action: { type: string; payload: TOrder }
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
