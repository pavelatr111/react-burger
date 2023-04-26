import { ingredients } from "../../utils/testConstants"
import { getBurgerIngredients, GET_INGREDIENTS_SUCCESS } from "../actions/burgerIngredients"
import { ingredientsReducer, initialState } from "./burgerIngredients"


describe('ingredients reducer test', () => {
    it('should handle get burger ingredients success', () => {
        expect(ingredientsReducer(initialState, {type: GET_INGREDIENTS_SUCCESS,  payload: ingredients }))
        .toEqual({
            ...initialState, dataBurger: ingredients
        })
    })
})