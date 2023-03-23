import { GET__CURRENT_INGREDIENT } from "../actions/ingredientDitails";

const initialState = {
    currentIngredient: null
}

export const currentIngredientReducer = (state = initialState, action) => {
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