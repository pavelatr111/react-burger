import { burgerConstructorReducer, initialState } from "./burgerConstructor";
import { expect } from "@jest/globals";
import {
  ADD__INGREDIENT,
  REMOVE__INGREDIENT,
  UPDATE_CONSTRUCTOR,
  TBurgerConstructorUnionType,
} from "../actions/burgerConstructor";
import {
  mainTestIngredient,
  sauceTestIngredient,
} from "../../utils/testConstants";

describe("selection reducer", () => {
  it("should return the initial state", () => {
    expect(burgerConstructorReducer(undefined, { type: null })).toEqual(
      initialState
    );
  });

  it("should handle ADD_INGREDIENT", () => {
    expect(
      burgerConstructorReducer(initialState, {
        type: ADD__INGREDIENT,
        payload: mainTestIngredient,
      })
    ).toEqual({ ...initialState, ingredients: [mainTestIngredient] });
  });

  it("should handle REMOVE__INGREDIENT", () => {
    expect(
      burgerConstructorReducer(
        {
          ...initialState,
          ingredients: [sauceTestIngredient, mainTestIngredient],
        },
        { type: REMOVE__INGREDIENT, payload: "3" }
      )
    ).toEqual({ ...initialState, ingredients: [mainTestIngredient] });
  });

  it("should handle SELECTION_INGREDIENT_REORDER", () => {
    
    expect(
      burgerConstructorReducer({...initialState,  ingredients: [sauceTestIngredient, mainTestIngredient]}, {
        type: UPDATE_CONSTRUCTOR,
        payload: { dragIndex: 1, hoverIndex: 0 },
      })
    ).toEqual({ ...initialState, ingredients: [mainTestIngredient,sauceTestIngredient] });
  });
});
