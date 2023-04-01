import { combineReducers } from 'redux'
import { ingredientsReducer } from './burgerIngredients'
import { burgerConstructorReducer } from './burgerConstructor'
import { currentIngredientReducer } from './ingredientDitails';
import { orderReducer } from './orderDitails';
import { forgotPasswordReducer } from './forgotPassword';
import { resetPasswordReducer } from './resetPasswordReducer';
import { registrationReducer } from './registration';
import { loginReducer } from './login';


export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    burger: burgerConstructorReducer,
    currentIngredient: currentIngredientReducer,
    order: orderReducer,
    forgotPassword: forgotPasswordReducer,
    resetPassword: resetPasswordReducer,
    registration: registrationReducer,
    login: loginReducer,
});