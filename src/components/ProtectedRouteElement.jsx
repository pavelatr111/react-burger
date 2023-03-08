import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCookie } from "../utils/token";

 const ProtectedRouteElement = ({ element ,to }) => {

const token = getCookie("access");
const userData = useSelector((state) => state.user.user);
console.log(token, userData);

return token  ? element : <Navigate to="/login" replace/>;
}
export default ProtectedRouteElement;
