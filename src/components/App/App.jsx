import AppHeader from "../AppHeader/AppHeader";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBurgerIngredients } from "../../services/actions/burgerIngredients";
import Main from "../../pages/Main";
import Login from "../../pages/Login";
import Registration from "../../pages/Registration";
import ForgotPassword from "../../pages/ForgotPassword";
import ResetPassword from "../../pages/ResetPassword";
import ProfilePage from "../../pages/Profile";
import ProfileForm from "../../components/ProfileForm/ProfileForm";
import ProtectedRouteElement from "../ProtectedRouteElement.jsx"
import { IngredientPage } from "../../pages/IngrdientPage";
import Modal from "../Modal/Modal";
import IngredientDetails from "../Modal/IngredientDetails/IngredientDetails";
import { getCurrentIngredient } from "../../services/actions/ingredientDitails";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  let { state } = useLocation();
  const background = location.state && location.state.background;
  const { currentIngredient } = useSelector((state) => state.currentIngredient);

console.log(background);
  useEffect(() => {
    dispatch(getBurgerIngredients());
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
      {/* <Registration/> */}
      {background && 
        // <>
        //   <Route path="/ingredients/:id" >
        //   <Modal
        //   title={"Детали ингредиента"}
        //   closePopup={() => dispatch(getCurrentIngredient(null))}
        // >
        //   <IngredientDetails currentIngredient={currentIngredient} />
        // </Modal>
        //   </Route>
        // </>
        <Routes>
        <Route path={state} element={
          <Modal  title={"Детали ингредиента"} closePopup={() => dispatch(getCurrentIngredient(null))}>
             <IngredientDetails />
          </Modal>
        } />
      </Routes>
      }
    </div>
  );
}

export default App;
