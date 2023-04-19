import AppHeader from "../AppHeader/AppHeader";
import { useEffect } from "react";
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
import Feed from "../../pages/Feed/Feed";
import styles from "./App.module.css";
import UserOrder from "../UserOrder/UserOrder";
import ProfileForm from "../ProfileForm/ProfileForm";
import UserOrderInfo from "../UserOrderInfo/UserOrderInfo";

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
        <Route path={"/"} element={<Main />} />
        <Route
          path={"/register"}
          element={
            <ProtectedRouteElement anonymous={false}>
              <Registration />
            </ProtectedRouteElement>
          }
        />
        <Route
          path={"/login"}
          element={
            <ProtectedRouteElement anonymous={false}>
              <Login />
            </ProtectedRouteElement>
          }
        />
        <Route
          path={"/forgot-password"}
          element={
            <ProtectedRouteElement anonymous={false}>
              <ForgotPassword />
            </ProtectedRouteElement>
          }
        />
        <Route
          path={"/reset-password"}
          element={
            <ProtectedRouteElement anonymous={false}>
              <ResetPassword />
            </ProtectedRouteElement>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRouteElement anonymous={true}>
              <ProfilePage />
            </ProtectedRouteElement>
          }
        >
          <Route path="/profile" element={<ProfileForm />} />
          <Route path="/profile/orders" element={<UserOrder />} />
          <Route path="/profile/orders/:id" element={<UserOrderInfo />} />
        </Route>
        <Route path="ingredients/:id" element={<IngredientPage />} />

        <Route path="*" element={<NotFoundPage />} />

        <Route path="feed">
          <Route path="" element={<Feed />} />
          <Route
            path=":id"
            element={
              <div className={styles.details}>
                <UserOrderInfo />
              </div>
            }
          />
        </Route>
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

          <Route
            path="/feed/:id"
            element={
              <Modal closePopup={() => navigate(-1)}>
                <UserOrderInfo />
              </Modal>
            }
          />

          <Route
            path="/profile/orders/:id"
            element={
              <div>
                <Modal closePopup={() => navigate(-1)}>
                  {<UserOrderInfo />}
                </Modal>
              </div>
            }
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
