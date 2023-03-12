import { getIngredients } from "../../utils/MainAPI";


export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_ERROR = 'GET_INGREDIENTS_ERROR';

export const CURRENT__TAB = 'CURRENT__TAB'

export function getBurgerIngredients() {
    return function (dispatch) {
        dispatch({
            type: GET_INGREDIENTS_REQUEST
        })
        getIngredients()
            .then((res) => {
                dispatch({
                    type: GET_INGREDIENTS_SUCCESS,
                    payload: res.data
                });
            })
          .catch((e) => {
            dispatch({
              type: GET_INGREDIENTS_ERROR
            })
          })      

    }
}

export const setCurrentTabAction =(payload) => ({
  type: CURRENT__TAB,
  payload
})