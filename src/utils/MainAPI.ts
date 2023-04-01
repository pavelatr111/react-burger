import { MainBurgerApi } from "../constants/constants";
import { IGetBurgerIngredients, IOrderPost, IPasswordResponse, IPersonUser, IResponse, IResponseBody, IToken, ITokenResponse } from "../services/types/types-api.js";
import { getCookie, setCookie } from "./token";


function responce<T> (res: IResponse<T>): Promise<T> | Promise<never>  {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res}`)
}
type TOptions = RequestInit & {
  headers: {
    authorization: string;
  };
}

function request<T>(url: string, options: RequestInit): Promise<T> {
  return fetch(url, options).then(responce)
};
// подскажи пожалуйста где искать ошибку. у меня не происходит авто рефреш токена по истечениию его срока  тоолько после перезагрузки страницы
//!!!!!!!!))))))


export const fetchWithRefresh = async <T>(url: string, options: TOptions): Promise<T> => {
  try {
    const res = await fetch(url, options);
    return await responce(res);

  } catch (err: any) {
    if (err.message === 'jwt expired') {

      const refreshData = await refreshToken();
      if (!refreshData.success) {
        Promise.reject(refreshData);
      }
      setCookie('refreshToken', refreshData.refreshToken);
      setCookie('access', refreshData.accessToken.split('Bearer ')[1])

      options.headers.authorization = refreshData.accessToken;
      return request<T>(url, options);
      // const res = await fetch(url, options);
      // return await responce(res);
    } else {
      return Promise.reject(err);
    }
  }
};



function getIngredients(): Promise<IGetBurgerIngredients> {
  return fetch(`${MainBurgerApi}ingredients`)
    .then(responce)
}

function orderPost(data: Array<string>): Promise<IOrderPost> {
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

function forgotPassword(email: string): Promise<IPasswordResponse> {
  return fetch(`${MainBurgerApi}password-reset`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email
    })
  })
    .then(responce)
}

function resetPassword(password: string, token: string): Promise<IPasswordResponse> {
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

function registration(email: string, password: string, name: string): Promise<IToken> {
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

function login(email: string, password: string, name: string): Promise<IToken> {
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

function logout(): Promise<IResponseBody> {
  return fetch(`${MainBurgerApi}auth/logout`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      token: getCookie('refreshToken')
    })
  })
    .then(responce)
}

function refreshToken(): Promise<ITokenResponse> {
  return fetch(`${MainBurgerApi}auth/token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      token: getCookie('refreshToken')
    })
  })
    .then(responce)
}


function getUser(): Promise<IPersonUser> {
  return fetchWithRefresh<IPersonUser>(`${MainBurgerApi}auth/user`, {
    method: "GET",
    headers: {
      authorization: 'Bearer ' + getCookie('access'),
      'Content-Type': 'application/json'
    }
  })
  .then(data => {
    if (data?.success) {
      return data;
    }
    return Promise.reject(data);
  })
}



function updateUser(name: string, email: string, password: string): Promise<IPersonUser> {
  return fetchWithRefresh(`${MainBurgerApi}auth/user`, {
    method: "PATCH",
    headers: {
      authorization: 'Bearer ' + getCookie('access'),
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
