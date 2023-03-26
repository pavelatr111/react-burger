
import AppHeader from "../AppHeader/AppHeader";
import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getBurgerIngredients } from "../../services/actions/burgerIngredients";
import Main from "../../pages/Main";
import Login from "../../pages/Login";
import Registration from "../../pages/Registration";
import ForgotPassword from "../../pages/ForgotPassword";
import ResetPassword from "../../pages/ResetPassword";
import ProfilePage from "../../pages/Profile";
import ProtectedRouteElement from "../ProtectedRouteElement"
import { IngredientPage } from "../../pages/IngrdientPage";
import Modal from "../Modal/Modal";
import IngredientDetails from "../Modal/IngredientDetails/IngredientDetails";
import { getUserActions } from "../../services/actions/user";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const background = location.state && location.state.background;

  useEffect(() => {
    dispatch(getBurgerIngredients())
    dispatch(getUserActions());
  }, [dispatch]);

  return (
    <div>
      <AppHeader />
        <Routes location={background || location}>
          <Route path={"/"} element={<Main />} />
          <Route path={"/register"} element={<Registration />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/forgot-password"} element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/profile"  element={<ProtectedRouteElement element={<ProfilePage/>} to={"/login"}/>}/>
          <Route path="/ingredients/:id" element={<IngredientPage />} />
        </Routes>
      {background && 
        <Routes>
        <Route path="/ingredients/:id" element={
          <Modal  title={"Детали ингредиента"} closePopup={() => navigate(-1)}>
             <IngredientDetails />
          </Modal>
        } />
      </Routes>
      }
    </div>
  );
}

export default App;
