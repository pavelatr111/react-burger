import { Button, EmailInput, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { registrationActions } from "../services/actions/registration";
import styles from "./App.module.css"

function Registration() {
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const success = useSelector((state) => state.registration.success)
  const user = useSelector((state) => state.login.success)

  console.log(success);
  const registrationHandler = (evt) => {
    evt.preventDefault();
    dispatch(registrationActions(value.email, value.name, value.password ));
  };


  const inputRef = useRef(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
    alert("Icon Click Callback");
  };

  if (user) {
    return (
            // Переадресовываем авторизованного пользователя на главную страницу
      <Navigate
        to="/"
                replace
      />
    );
  }

  if (success) {
    return (
        <Navigate
        to={'/login'}
      />
    )
}

  return (
    <form className={styles.default} onSubmit={registrationHandler}>
      <h2 className="text text_type_main-medium">Регистрация</h2>
      <Input
        type={"text"}
        placeholder={"Имя"}
        onChange={(evt) => setValue({ ...value, name: evt.target.value })}
        value={value.name}
        name={"name"}
        error={false}
        ref={inputRef}
        onIconClick={onIconClick}
        errorText={"Ошибка"}
        size={"default"}
        extraClass="mt-6"
      />
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
        Зарегистрироваться
      </Button>
      <div className={`${styles.choice} mt-20`}>
        <p className="text text_type_main-default text_color_inactive">
          Уже зарегистрированы?
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

export default Registration;
