import { ReactElement } from "react";
import { Route, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "../hooks/hooks";

import { getCookie } from "../utils/token";
interface IProtectedRouteElementProps {
  
  children: ReactElement
  anonymous:boolean
};

// const ProtectedRouteElement = ({ element }:IProtectedRouteElementProps) => {
//   const location = useLocation()
//   const token = getCookie("access");
//   const userData = useSelector ((state) => state.login.user);
//   // console.log(token, userData);

//   return token && userData ? element : <Navigate to="/login" state={{ from: location}}/>;
// };
// export default ProtectedRouteElement;

export default function ProtectedRouteElement({ children, anonymous = false }:IProtectedRouteElementProps) {
  const isLoggedIn =useSelector ((state) => state.login.user);
  const location = useLocation();
  const from = location.state?.from || '/';
  // Если разрешен неавторизованный доступ, а пользователь авторизован...
  if (anonymous && isLoggedIn) {
    // ...то отправляем его на предыдущую страницу
    return <Navigate to={ from } />;
  }

  // Если требуется авторизация, а пользователь не авторизован...
  if (!anonymous && !isLoggedIn) {
    // ...то отправляем его на страницу логин
    return <Navigate to="/login" state={{ from: location}}/>;
  }

  // Если все ок, то рендерим внутреннее содержимое
  return children;
}