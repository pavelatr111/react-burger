import { MainBurgerApi } from "../constants/constants.js";
import { getCookie } from "./token.js";


const responce = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res}`);
}

function getIngredients() {
  return fetch(`${MainBurgerApi}ingredients`)
    .then(responce)
}

function orderPost(data) {
  return fetch(`${MainBurgerApi}orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      "ingredients": data
    })
  })
    .then(responce)
}

function forgotPassword(email) {
  return fetch(`${MainBurgerApi}password-reset`,{
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email
    })
  })
    .then(responce)
}

function resetPassword(password, token) {
  return fetch(`${MainBurgerApi}password-reset/reset`,{
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      password,
      token
    })
  })
  .then(responce)
}

function registration(email, password, name) {
  return fetch(`${MainBurgerApi}auth/register`,{
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      password,
      name
    })
  })
  .then(responce)
}

function login(email, password, name){
  return fetch(`${MainBurgerApi}auth/login`,{
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      password,
      name
    })
  })
  .then(responce)
}

function logout(){
  return fetch(`${MainBurgerApi}auth/logout`,{
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      token: localStorage.getItem('refresh')
    })
  })
  .then(responce)
}

function refreshToken(){
  return fetch(`${MainBurgerApi}auth/token`,{
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      token: localStorage.getItem('refresh')
    })
  })
  .then(responce)
}

function getUser(){
  return fetch(`${MainBurgerApi}auth/user`,{
    method: "GET",
    headers:  {
      authorization: 'Bearer ' + getCookie('access'),
      'Content-Type': 'application/json'
    }
  })
  .then(responce)
}

function updateUser(name, email, password){
  return fetch(`${MainBurgerApi}auth/user`,{
    method: "PATCH",
    headers:  {
      'authorization': 'Bearer ' + getCookie('access'),
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      email,
      password
    }),
  })
  .then(responce)
}
export { getIngredients, orderPost, forgotPassword, resetPassword, registration, login, logout, refreshToken, getUser, updateUser }
