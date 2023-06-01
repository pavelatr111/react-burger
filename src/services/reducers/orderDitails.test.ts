import { orderInfoTest } from "../../utils/testConstants";
import {
  GET_ORDER_SUCCESS,
  POST__ORDER_SUCCESS,
  RESET_ORDER,
} from "../actions/orderDitails";
import { TwsOrderType } from "../types/types-api";
import { initialStateOrderDitails, orderReducer } from "./orderDitails";

describe("order-details reducer test", () => {
  it("should handle get order details success", () => {
    expect(
      orderReducer(initialStateOrderDitails, {
        type: POST__ORDER_SUCCESS,
        payload: 5,
      })
    ).toEqual({
      ...initialStateOrderDitails,
      orders: 5,
    });
  });
  it("should handle reset order", () => {
    expect(
      orderReducer(initialStateOrderDitails, { type: RESET_ORDER })
    ).toEqual({
      ...initialStateOrderDitails,
      orders: null,
      feedRequest: false,
      feedFailed: false,
      orderPopupShow: false,
    });
  });
  it("should handle get order success", () => {

    expect(
      orderReducer(initialStateOrderDitails, {
        type: GET_ORDER_SUCCESS,
        payload: orderInfoTest,
      })
    ).toEqual({
      ...initialStateOrderDitails,
      orderInformation: orderInfoTest,
      orderInfoFailed: false,
      orderInfoRequest: false,
    });
  });
});
