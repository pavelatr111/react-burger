import { GET__CURRENT_INGREDIENT } from "../actions/ingredientDitails";
import { TIngredientReducerType } from "../types/types";


type TInitialState = {
    currentIngredient: TIngredientReducerType | null
  }

const initialState:  TInitialState = {
    currentIngredient: null
}

export const currentIngredientReducer = (state = initialState, action: { type: string; payload: any; }) => {
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