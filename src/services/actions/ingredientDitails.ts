import { TIngredientReducerType, TIngredientType } from "../types/types";

export const GET__CURRENT_INGREDIENT: 'GET__CURRENT_INGREDIENT' = 'GET__CURRENT_INGREDIENT'

export interface IGetCurrentIngredientAction {
    readonly type: typeof GET__CURRENT_INGREDIENT;
    payload: TIngredientType 
  }

  export type TCurrentIngredientUnionType = 
  | IGetCurrentIngredientAction

export const getCurrentIngredient = (payload: TIngredientType): IGetCurrentIngredientAction=> ({
    type: GET__CURRENT_INGREDIENT,
    payload
})