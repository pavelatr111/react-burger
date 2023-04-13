import { Action, ActionCreator, createStore, Dispatch } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { store } from "../..";
import { TBurgerConstructorUnionType } from "../actions/burgerConstructor";
import { TBurgerIngredientUnionType } from "../actions/burgerIngredients";
import { TForgotPasswordUnionType } from "../actions/forgotPassword";
import { TCurrentIngredientUnionType } from "../actions/ingredientDitails";
import { TLoginUionType } from "../actions/loginActions";
import { TOrderUnionType } from "../actions/orderDitails";
import { TRegistrationUnionType } from "../actions/registration";
import { TResetPasswordUnionType } from "../actions/resetPassword";
import { TUserUnionType } from "../actions/user";
import {
  TWsActions,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_DISCONNECT,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_OPEN,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_GET_MESSAGE,
} from "../actions/wsAction";

export type TDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type TIngredientType = {
  id?: string;
  readonly _id: string;
  readonly name: string;
  readonly type: string;
  readonly proteins: number;
  readonly fat: number;
  readonly carbohydrates: number;
  readonly calories: number;
  readonly price: number;
  readonly image: string;
  readonly image_mobile: string;
  readonly image_large: string;
  readonly __v: number;
};

export type TIngredientReducerType = TIngredientType & { id: string };

type TApplicationActions =
  | TBurgerConstructorUnionType
  | TBurgerIngredientUnionType
  | TForgotPasswordUnionType
  | TCurrentIngredientUnionType
  | TLoginUionType
  | TOrderUnionType
  | TRegistrationUnionType
  | TResetPasswordUnionType
  | TUserUnionType
  | TWsActions;

export type AppDispatch = ThunkDispatch<RootState, never, TApplicationActions>;
// export type AppDispatch = Dispatch<TApplicationActions>;

export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, RootState, Action, TApplicationActions>
>;

export type TwsActionType = {
  onStart: typeof WS_CONNECTION_START;
  onOpen: typeof WS_CONNECTION_OPEN;
  onSuccess: typeof WS_CONNECTION_SUCCESS;
  onClosed: typeof WS_CONNECTION_CLOSED;
  onDisconnect: typeof WS_CONNECTION_DISCONNECT;
  onError: typeof WS_CONNECTION_ERROR;
  onMessage: typeof WS_GET_MESSAGE;
};
