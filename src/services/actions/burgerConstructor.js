import { v4 as uuidv4 } from 'uuid';

export const ADD__INGREDIENT = 'ADD__INGREDIENT'
export const REMOVE__INGREDIENT = 'REMOVE__INGREDIENT'
export const UPDATE_CONSTRUCTOR= 'UPDATE_CONSTRUCTOR'


export const addIngredient = (payload) => ({
    type: ADD__INGREDIENT,
    payload: {
        ...payload,
    id: uuidv4()
    }
});

export const removeIngredient = (payload) => ({
    type: REMOVE__INGREDIENT,
    payload
});

export const updateConstructor = (payload) => ({
    type: UPDATE_CONSTRUCTOR,
    payload
})