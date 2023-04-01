import AppHeader from "../AppHeader/AppHeader";
import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import { getBurgerIngredients } from "../../services/actions/burgerIngredients";
import Main from "../../pages/Main";
import Login from "../../pages/Login";
import Registration from "../../pages/Registration";
import ForgotPassword from "../../pages/ForgotPassword";
import ResetPassword from "../../pages/ResetPassword";
import ProfilePage from "../../pages/Profile";
import ProtectedRouteElement from "../ProtectedRouteElement";
import { IngredientPage } from "../../pages/IngrdientPage";
import Modal from "../Modal/Modal";
import IngredientDetails from "../Modal/IngredientDetails/IngredientDetails";
import { getUserActions } from "../../services/actions/user";
import { useDispatch } from "../../hooks/hooks";
import { NotFoundPage } from "../../pages/404";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const background = location.state && location.state.background;

  useEffect(() => {
    dispatch(getBurgerIngredients());
    dispatch(getUserActions());
  }, [dispatch]);

  return (
    <div>
      <AppHeader />
      <Routes location={background || location}>
        
        <Route path={"/"} element={<Main />}/>
        <Route path={"/register"} element={<ProtectedRouteElement  anonymous={true}><Registration /></ProtectedRouteElement>} />
        <Route path={"/login"} element={<ProtectedRouteElement  anonymous={true}><Login /></ProtectedRouteElement>} />
        <Route path={"/forgot-password"} element={<ProtectedRouteElement  anonymous={true}><ForgotPassword /></ProtectedRouteElement>} />
        <Route path="/reset-password" element={<ProtectedRouteElement  anonymous={true}><ResetPassword /></ProtectedRouteElement>} />
        <Route
          path="/profile"
          element={
            <ProtectedRouteElement anonymous={false}>
              <ProfilePage />
            </ProtectedRouteElement>
          }
        />
        <Route path="/ingredients/:id" element={<IngredientPage />} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
      {background && (
        <Routes>
          <Route
            path="/ingredients/:id"
            element={
              <Modal
                title={"Детали ингредиента"}
                closePopup={() => navigate(-1)}
              >
                <IngredientDetails />
              </Modal>
            }
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
