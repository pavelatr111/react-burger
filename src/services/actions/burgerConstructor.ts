import { v4 as uuidv4 } from 'uuid';
import { TIngredientReducerType, TIngredientType } from '../types/types';

export const ADD__INGREDIENT: 'ADD__INGREDIENT' = 'ADD__INGREDIENT'
export const REMOVE__INGREDIENT: 'REMOVE__INGREDIENT' = 'REMOVE__INGREDIENT'
export const UPDATE_CONSTRUCTOR: 'UPDATE_CONSTRUCTOR' = 'UPDATE_CONSTRUCTOR'

export interface IAddIngredientAction {
    readonly type: typeof ADD__INGREDIENT;
    readonly payload: TIngredientType;
  }
  export interface IRemoveIngredientAction {
    readonly type: typeof REMOVE__INGREDIENT;
    readonly payload: string |undefined;
  }

  export interface IUpdateIngredientAction {
    readonly type: typeof UPDATE_CONSTRUCTOR;
    readonly payload: {[name: string]: number};
  }

export type TBurgerConstructorUnionType = 
| IAddIngredientAction
| IRemoveIngredientAction
| IUpdateIngredientAction

export const addIngredient = (payload: TIngredientType):IAddIngredientAction => ({
    type: ADD__INGREDIENT,
    payload: {
        ...payload,
        id: uuidv4()
    }
});

export const removeIngredient = (payload: string | undefined ): IRemoveIngredientAction => ({
    type: REMOVE__INGREDIENT,
    payload
});

export const updateConstructor = (payload: {[name: string]: number}): IUpdateIngredientAction => ({
    type: UPDATE_CONSTRUCTOR,
    payload
})