import { TWsActions, WS_CONNECTION_CLOSED, WS_CONNECTION_ERROR, WS_CONNECTION_OPEN, WS_CONNECTION_SUCCESS, WS_GET_MESSAGE } from "../actions/wsAction";
import { TwsOrderType } from "../types/types-api";

type TWsState = {
  wsConnected: boolean;
  orders: Array<TwsOrderType>;
  total: number | null;
  totalToday: number | null;
  error?: string | undefined;
};

export const initialStateWS: TWsState = {
  wsConnected: false,
  orders: [],
  total: null,
  totalToday: null,
  error: undefined,
};

export const wsReducer = (state = initialStateWS, action: TWsActions): TWsState =>{
    switch (action.type) {
        case WS_CONNECTION_OPEN:
          return {
            ...state,
            wsConnected: false,
          };
        case WS_CONNECTION_SUCCESS:
          return {
            ...state,
            error: undefined,
            wsConnected: true,
            orders: []
          };
        case WS_CONNECTION_ERROR:
          return {
            ...state,
            error: action.payload,
            wsConnected: false,
          };
        case WS_CONNECTION_CLOSED:
          return {
            ...state,
            error: undefined,
            wsConnected: false,
            orders: []
          };
        case WS_GET_MESSAGE:
          return {
            ...state,
            error: undefined,
            orders: action.payload.orders,
            total: action.payload.total,
            totalToday: action.payload.totalToday
          };
        default:
          return state;
      }
}