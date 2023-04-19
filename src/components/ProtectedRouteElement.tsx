import { ReactElement } from "react";
import {  Navigate, useLocation } from "react-router-dom";
import { useSelector } from "../hooks/hooks";
import { getCookie } from "../utils/token";


interface IProtectedRouteElementProps {
  
  children: ReactElement
  anonymous:boolean
};
export function haveUserAccess(): boolean {
  let access = getCookie('access');
  return access !== null && access !== undefined && access !== '';
}
export default function ProtectedRouteElement({ children, anonymous }:IProtectedRouteElementProps) {
  // const isLoggedIn =useSelector ((state) => state.login.user);
  // const location = useLocation();
  // const from = location.state?.from || '/';
  // // Если разрешен неавторизованный доступ, а пользователь авторизован...
  // if (anonymous && isLoggedIn) {
  //   // ...то отправляем его на предыдущую страницу
  //   return <Navigate to={ from } />;
  // }

  // // Если требуется авторизация, а пользователь не авторизован...
  // if (!anonymous && !isLoggedIn) {
  //   // ...то отправляем его на страницу логин
  //   return <Navigate to="/login" state={{ from: location}}/>;
  // }

  // // Если все ок, то рендерим внутреннее содержимое
  // return children;
  const location = useLocation();
  const successUserLogged = haveUserAccess();
  const user = useSelector((state) =>state.login.user);
  const isLoggedIn = (successUserLogged || user);

  if (!anonymous && isLoggedIn) {
    // const toPath = location.state?.from || '/';
    return <Navigate to={location.state?.from || '/'} />;
  }

  if (anonymous && !isLoggedIn) {
    return <Navigate to='/login' state={{ from: location }} />;
  }

  return children;
}