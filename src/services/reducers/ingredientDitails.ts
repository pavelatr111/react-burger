import { GET__CURRENT_INGREDIENT, TCurrentIngredientUnionType } from "../actions/ingredientDitails";
import { TIngredientReducerType, TIngredientType } from "../types/types";


type TCurrentIngredientInitialState = {
    currentIngredient: TIngredientType | null
  }

const initialState:  TCurrentIngredientInitialState = {
    currentIngredient: null
}

export const currentIngredientReducer = (state = initialState, action: TCurrentIngredientUnionType): TCurrentIngredientInitialState=> {
    switch (action.type) {
        case GET__CURRENT_INGREDIENT: {
            return {
                ...state,
                currentIngredient: action.payload
            }
        }
        default: {
            return state;
        }
    }
}