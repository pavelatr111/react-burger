
import { ADD__INGREDIENT, REMOVE__INGREDIENT, TBurgerConstructorUnionType, UPDATE_CONSTRUCTOR } from '../actions/burgerConstructor'
import { TIngredientReducerType, TIngredientType } from '../types/types'

type TConstructorInitialState = {
    ingredients: Array<TIngredientType>,
    buns: TIngredientType | null
}

const initialState: TConstructorInitialState = {
    buns: null,
    ingredients: [],
}

export const burgerConstructorReducer = (state = initialState, action: TBurgerConstructorUnionType): TConstructorInitialState => {
    switch (action.type) {
        case ADD__INGREDIENT: {
            if (action.payload.type === 'bun') {
                return {
                    ...state,
                    buns: action.payload
                }
            }

            return {
                ...state,
                ingredients: [
                    ...state.ingredients,
                    action.payload
                ]
            };
        }
        case REMOVE__INGREDIENT: {
            return {
                ...state,
                ingredients: state.ingredients.filter(
                    (ingredient) => ingredient.id !== action.payload
                )
            };
        }
        case UPDATE_CONSTRUCTOR: {
            const ingredients = [...state.ingredients];
            const { dragIndex, hoverIndex } = action.payload;

            ingredients.splice(hoverIndex, 0, ...ingredients.splice(dragIndex, 1));

            return {
                ...state,
                ingredients
            };
        }
        default: {
            return state;
        }
    }
};