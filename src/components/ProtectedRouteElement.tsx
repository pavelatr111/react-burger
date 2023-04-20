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
  
  const location = useLocation();
  const successUserLogged = haveUserAccess();
  const user = useSelector((state) =>state.login.user);
  const isLoggedIn = (successUserLogged || user);

  if (!anonymous && isLoggedIn) {
    return <Navigate to={location.state?.from || '/'} />;
  }

  if (anonymous && !isLoggedIn) {
    return <Navigate to='/login' state={{ from: location }} />;
  }

  return children;
}