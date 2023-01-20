import {  MainBurgerApi } from "../constants/constants.js";


const responce = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res}`);
}

function getIngredients() {
  return fetch( `${MainBurgerApi}ingredients`)
   .then(responce)
}

function orderPost(data) {
  return  fetch(`${MainBurgerApi}orders`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      "ingredients": data
    })
  })
  .then(responce)
}



export { getIngredients, orderPost }
