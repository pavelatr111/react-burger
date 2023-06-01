import { getUserTest, userTest } from "../../utils/testConstants";
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actions/loginActions";
import { GET_USER_SUCCESS, UPDATE_USER_SUCCESS } from "../actions/user";
import { initialStateLogin, loginReducer } from "./login";

describe("login reducer test", () => {
  it("should handle registration success", () => {
    expect(
      loginReducer(initialStateLogin, {
        type: LOGIN_SUCCESS,
        payload: userTest,
      })
    ).toEqual({
      ...initialStateLogin,
      success: true,
      user: userTest,
    });
  });
  it("should handle user logout success", () => {
    expect(
      loginReducer(initialStateLogin, {
        type: LOGOUT_SUCCESS,
        payload: { success: true},
      })
    ).toEqual({
        ...initialStateLogin,
        logout: true,
        user: null,
      });
  });
  it("should handle get user info", () => {
    expect(
      loginReducer(initialStateLogin, {
        type: GET_USER_SUCCESS,
        payload: getUserTest,
      })
    ).toEqual({
        ...initialStateLogin,
        success: true,
        user: userTest,
      });
  });
  it('should handle update user info', () => {
    expect(loginReducer(initialStateLogin, {
        type: UPDATE_USER_SUCCESS,
        payload: getUserTest,
      }))
        .toEqual({
            ...initialStateLogin,
            success: true,
            user: userTest,
        })
})
});
