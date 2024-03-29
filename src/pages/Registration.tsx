import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { FormEvent, useRef } from "react";

import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "../hooks/hooks";
import { useForm } from "../hooks/useForm";
import { registrationActions } from "../services/actions/registration";
import { getCookie } from "../utils/token";
import styles from "./App.module.css";

function Registration() {
  const dispatch = useDispatch();
  // const [value, setValue] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  // });

  const { values, handleChange } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const success = useSelector((state) => state.registration.success);
  const user = useSelector((state) => state.login.user);
  const suc = getCookie("access");

  
  const registrationHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(registrationActions(values.email, values.name, values.password));
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current?.focus(), 0);
    alert("Icon Click Callback");
  };

  // if (user && suc) {
  //   return (
  //     // Переадресовываем авторизованного пользователя на главную страницу
  //     <Navigate to="/" replace />
  //   );
  // }

  // if (success) {
  //   return <Navigate to={"/login"} />;
  // }

  return (
    <form className={styles.default} onSubmit={registrationHandler}>
      <h2 className="text text_type_main-medium">Регистрация</h2>
      <Input
        type={"text"}
        placeholder={"Имя"}
        onChange={handleChange}
        value={values.name}
        name={"name"}
        error={false}
        ref={inputRef}
        onIconClick={onIconClick}
        errorText={"Ошибка"}
        size={"default"}
        extraClass="mt-6"
      />
      <EmailInput
        onChange={handleChange}
        value={values.email}
        name={"email"}
        extraClass="mt-6"
      />
      <PasswordInput
        onChange={handleChange}
        value={values.password}
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
