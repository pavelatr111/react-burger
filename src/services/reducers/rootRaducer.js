import {combineReducers} from 'redux'
import {ingredientsReducer} from './burgerIngredients'
import {burgerConstructorReducer} from './burgerConstructor'
import { currentIngredientReducer } from './ingredientDitails';
import { orderReducer } from './orderDitails';

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    burger: burgerConstructorReducer,
    currentIngredient: currentIngredientReducer,
    order: orderReducer
});