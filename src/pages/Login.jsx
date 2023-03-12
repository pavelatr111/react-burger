import {
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { loginActions } from "../services/actions/loginActions";
import { getCookie } from "../utils/token";
import styles from "./App.module.css";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.login.user)
  const suc = getCookie('access')
  console.log(user);
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const authorizationHandler = (evt) => {
    evt.preventDefault();
    dispatch(loginActions(value.email, value.password));
    navigate('/');
  };

  if (user && suc) {
    return (
            // Переадресовываем авторизованного пользователя на главную страницу
      <Navigate
        to="/"
                replace
      />
    );
  }

  return (
    <form className={styles.default} onSubmit={authorizationHandler}>
      <h2 className="text text_type_main-medium">Вход</h2>
      <EmailInput
        onChange={(evt) => setValue({ ...value, email: evt.target.value })}
        value={value.email}
        name={"email"}
        extraClass="mt-6"
      />
      <PasswordInput
        onChange={(evt) => setValue({ ...value, password: evt.target.value })}
        value={value.password}
        name={"password"}
        icon="ShowIcon"
        extraClass="mt-6"
      />
      <Button type="primary" size="medium" htmlType="submit" extraClass="mt-6">
        Войти
      </Button>
      <div className={`${styles.choice} mt-20`}>
        <p className="text text_type_main-default text_color_inactive">
          Вы — новый пользователь?
        </p>
        <Link to="/register" className="text text_type_main-default">
          Зарегистрироваться
        </Link>
      </div>
      <div className={`${styles.choice} mt-4`}>
        <p className="text text_type_main-default text_color_inactive">
          Забыли пароль?
        </p>
        <Link to="/forgot-password" className="text text_type_main-default">
          Восстановить пароль
        </Link>
      </div>
    </form>
  );
}

export default Login;
