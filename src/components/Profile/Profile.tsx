import { useCallback } from "react";
import {  NavLink } from "react-router-dom";
import { useDispatch} from "../../hooks/hooks";
import { logoutActions } from "../../services/actions/loginActions";
import styles from "./Profile.module.css";

export function UserProfile() {
  const dispatch = useDispatch();
  // const success = useSelector((state) => state.login.logout);

  const logoutHandler = useCallback(() => {
    dispatch(logoutActions());
  }, [dispatch]);


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
