import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {  useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { resetPasswordActions } from "../services/actions/resetPassword.js";
import { getCookie } from "../utils/token";
import styles from "./App.module.css";

function ResetPassword() {
  const [value, setValue] = useState({
    password: "",
    token: "",
  });

  const dispatch = useDispatch();
  const success = useSelector<any>((state) => state.forgotPassword.success);
  const user = useSelector<any>((state) => state.login.user);
  const suc = getCookie("access");
  const inputRef = useRef<HTMLInputElement>(null);

  const onIconClick = () => {
    setTimeout(() => inputRef.current?.focus(), 0);
    alert("Icon Click Callback");
  };

  const resetHandler = (evt: { preventDefault: () => void; }) => {
    evt.preventDefault();
    dispatch<any>(resetPasswordActions(value.password, value.token));
  };

  if (user && suc) {
    return (
      // Переадресовываем авторизованного пользователя на главную страницу
      <Navigate to="/" replace />
    );
  }

  if (!success) {
    return <Navigate to={"/forgot-password"} />;
  }

  return (
    <form className={styles.default} onSubmit={resetHandler}>
      <h2 className="text text_type_main-medium">Восстановление пароля</h2>
      <PasswordInput
        placeholder="Введите новый пароль"
        onChange={(evt) => setValue({ ...value, password: evt.target.value })}
        value={value.password}
        name={"password"}
        icon="ShowIcon"
        extraClass="mt-6"
      />
      <Input
        type={"text"}
        placeholder={"Введите код из письма"}
        onChange={(evt) => setValue({ ...value, token: evt.target.value })}
        value={value.token}
        name={"name"}
        error={false}
        ref={inputRef}
        onIconClick={onIconClick}
        errorText={"Ошибка"}
        size={"default"}
        extraClass="mt-6"
      />
      <Button type="primary" size="medium" htmlType="submit" extraClass="mt-6">
        Сохранить
      </Button>
      <div className={`${styles.choice} mt-20`}>
        <p className="text text_type_main-default text_color_inactive">
          Вспомнили пароль?
        </p>
        <Link
          to="/login"
          className={`${styles.link} text text_type_main-default`}
        >
          Войти
        </Link>
      </div>
    </form>
  );
}

export default ResetPassword;
