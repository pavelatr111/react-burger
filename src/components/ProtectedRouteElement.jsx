import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCookie } from "../utils/token";

const ProtectedRouteElement = ({ element, to }) => {
  const token = getCookie("access");
  const userData = useSelector ((state) => state.login.user);
  // console.log(token, userData);

  return token && userData ? element : <Navigate to={to} replace />;
};
export default ProtectedRouteElement;
