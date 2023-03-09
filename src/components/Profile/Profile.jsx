import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, NavLink } from "react-router-dom";
import  {logoutActions}  from "../../services/actions/loginActions.jsx";
import styles from "./Profile.module.css";

export function UserProfile() {
    const dispatch = useDispatch()
    const success = useSelector((state) => state.login.logout)
    const user = useSelector((state) => state.login.user)

    // console.log(user, success);

    const logoutHandler = useCallback(() => {
        dispatch(logoutActions())
        dispatch()
    }, [dispatch])


  if (!success && !user ) {
    return (
        <Navigate
        to={'/login'}
      />
    )
}


  return (
    <nav className={styles.menu}>
      <NavLink
        to="/profile"
        className={({ isActive }) =>
          isActive
            ? `${styles.link} text text_type_main-medium ` + styles.link_active
            : `${styles.link} text text_type_main-medium text_color_inactive`
        }
      >
        Профиль
      </NavLink>
      <NavLink
        to="/profile/orders"
        className={({ isActive }) =>
          isActive
            ? `${styles.link} text text_type_main-medium ` + styles.link_active
            : `${styles.link} text text_type_main-medium text_color_inactive`
        }
      >
        История заказов
      </NavLink>
      <button
        onClick={logoutHandler}
        className={`${styles.button} text text_type_main-medium text_color_inactive`}
      >
        Выход
      </button>
      <span className="text text_type_main-default text_color_inactive mt-20">
        В этом разделе вы можете изменить свои персональные данные
      </span>
    </nav>
  );
}
