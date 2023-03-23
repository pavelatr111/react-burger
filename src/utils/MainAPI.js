import { MainBurgerApi } from "../constants/constants.js";
import { getCookie, setCookie } from "./token.js";


const responce = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res}`);
}

export const fetchWithRefresh = async (url, options) => {
  try {
    const res = await fetch(url, options);
    return await responce(res);
  } catch (err) {
    if (err.message === 'jwt expired') {
      const refreshData = await refreshToken(getCookie('refreshToken'));
      if (!refreshData.success) {
        Promise.reject(refreshData);
      }
      setCookie('refreshToken', refreshData.refreshToken);
      setCookie('access', refreshData.accessToken.split('Bearer ')[1]);
      options.headers.authorization = refreshData.accessToken;
      const res = await fetch(url, options);
      return await responce(res);
    } else {
      return Promise.reject(err);
    }
  }
};


function getIngredients() {
  return fetch(`${MainBurgerApi}ingredients`)
    .then(responce)
}

function orderPost(data) {
  return fetchWithRefresh(`${MainBurgerApi}orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: 'Bearer ' + getCookie('access')
    },
    body: JSON.stringify({
      "ingredients": data
    })
  })
}

function forgotPassword(email) {
  return fetch(`${MainBurgerApi}password-reset`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email
    })
  })
    .then(responce)
}

function resetPassword(password, token) {
  return fetch(`${MainBurgerApi}password-reset/reset`, {
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
  return fetch(`${MainBurgerApi}auth/register`, {
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

function login(email, password, name) {
  return fetch(`${MainBurgerApi}auth/login`, {
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

function logout() {
  return fetch(`${MainBurgerApi}auth/logout`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      token: getCookie('refreshToken')
    })
  })
    .then(responce)
}

function refreshToken(refresh) {
  return fetch(`${MainBurgerApi}auth/token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      token: getCookie('refreshToken')
    })
  })
    .then(responce)
}

function getUser() {
  return fetchWithRefresh(`${MainBurgerApi}auth/user`, {
    method: "GET",
    headers: {
      authorization: 'Bearer ' + getCookie('access'),
      'Content-Type': 'application/json'
    }
  })
}

function updateUser(name, email, password) {
  return fetchWithRefresh(`${MainBurgerApi}auth/user`, {
    method: "PATCH",
    headers: {
      'authorization': 'Bearer ' + getCookie('access'),
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      email,
      password
    }),
  })
}
export { getIngredients, orderPost, forgotPassword, resetPassword, registration, login, logout, refreshToken, getUser, updateUser }
