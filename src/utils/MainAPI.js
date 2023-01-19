import {  MainBurgerApi } from "../constants/constants.js";

const checkRes = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res}`);
}

function getIngredients() {
  return fetch( MainBurgerApi)
   .then(checkRes)
}



export { getIngredients }
// function response(res){
//   return res.ok ? res.json() : Promise.reject(`Ошибка: ${res}`);
// }


// class Api {
//   constructor({url}) {
    
//       this._url = url;

//   }
//   //делаем запрос на сервер для получения карточек
//   getBurger(){
//       return fetch(this._url)
//           .then(response)
//   }
  
// }

// const api = new Api ({
// url: MainBurgerApi
// })

// export default api