import { AnyAction } from "redux";
import { CURRENT__TAB, GET_INGREDIENTS_ERROR, GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS } from "../actions/burgerIngredients"
import { TIngredientType } from "../types/types";




type TInitialState = {
    dataBurger: Array<TIngredientType>,
    feedRequest: Boolean,
    feedFailed: Boolean,
    currentTab: string | null,
  }
  

const initialState: TInitialState = {
    feedRequest: false,
    feedFailed: false,
    dataBurger: [],
    currentTab: null
}

export const ingredientsReducer = (state = initialState, action: AnyAction): TInitialState => {
    switch (action.type) {
        case GET_INGREDIENTS_REQUEST: {
            return {
                ...state,
                feedRequest: true,
                feedFailed: false,
            }
        }
        case GET_INGREDIENTS_SUCCESS: {
            return {
                ...state,
                dataBurger: action.payload,
                feedRequest: false
            }
        }
        case GET_INGREDIENTS_ERROR: {
            return {
                ...state,
                feedRequest: false,
                feedFailed: true,
            }
        }
        case CURRENT__TAB: {
            return {
                ...state,
                currentTab: action.payload
            }
        }
        default: {
            return state
        }
    }
}


