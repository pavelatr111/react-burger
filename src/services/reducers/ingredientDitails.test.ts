import { mainTestIngredient } from "../../utils/testConstants"
import { ADD__INGREDIENT } from "../actions/burgerConstructor"
import { GET__CURRENT_INGREDIENT } from "../actions/ingredientDitails"
import { currentIngredientReducer, initialStateCurrent } from "./ingredientDitails"

describe('ingredient-details reducer test', () => {
    it('should handle add ingredient details', () => {
        expect(currentIngredientReducer(initialStateCurrent, {type: GET__CURRENT_INGREDIENT,  payload: mainTestIngredient  }))
            .toEqual({
                ...initialStateCurrent,  currentIngredient: mainTestIngredient
            })
    })
})