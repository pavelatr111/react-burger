import { ReactElement } from "react";
import {  Navigate, useLocation } from "react-router-dom";
import { useSelector } from "../hooks/hooks";

import { getCookie } from "../utils/token";
interface IProtectedRouteElementProps {
  element: ReactElement
};

const ProtectedRouteElement = ({ element }: IProtectedRouteElementProps) => {
  const location = useLocation()
  const token = getCookie("access");
  const userData = useSelector ((state) => state.login.user);
  // console.log(token, userData);

  return token && userData ? element : <Navigate to="/login" state={{ from: location}}/>;
};
export default ProtectedRouteElement;
