import { allOrdersTest } from "../../utils/testConstants";
import { WS_CONNECTION_CLOSED, WS_CONNECTION_ERROR, WS_CONNECTION_OPEN, WS_CONNECTION_SUCCESS, WS_GET_MESSAGE } from "../actions/wsAction";
import { initialState } from "./burgerIngredients";
import { initialStateWS, wsReducer } from "./wsReducer";

describe('ws reducer', () => {
  
    it('should handle WS_CONNECTION_OPEN', () => {
      expect(wsReducer(initialStateWS, { type: WS_CONNECTION_OPEN })).toEqual(initialStateWS)
    });
  
    it('should handle WS_CONNECTION_SUCCESS', () => {
      expect(wsReducer(initialStateWS, { type: WS_CONNECTION_SUCCESS })).toEqual({...initialStateWS, wsConnected: true})
    });
  
    it('should handle WS_CONNECTION_ERROR', () => {
      expect(wsReducer(initialStateWS, { type: WS_CONNECTION_ERROR, payload: 'test error' })).toEqual({...initialStateWS, error: 'test error'})
    });
  
    it('should handle WS_CONNECTION_CLOSED', () => {
      expect(wsReducer(initialStateWS, { type: WS_CONNECTION_CLOSED })).toEqual(initialStateWS)
    });
  
    it('should handle WS_GET_MESSAGE', () => {
      expect(wsReducer(initialStateWS, { type: WS_GET_MESSAGE, payload: allOrdersTest })).toEqual({...initialStateWS, orders: allOrdersTest.orders,
        total: allOrdersTest.total,
        totalToday: allOrdersTest.totalToday})
    });
  })