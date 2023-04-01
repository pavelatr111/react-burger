import {
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { FormEvent } from "react";

import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "../hooks/hooks";
import { useForm } from "../hooks/useForm";
import { loginActions } from "../services/actions/loginActions";
import { getCookie } from "../utils/token";
import styles from "./App.module.css";

function Login() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.user);
  const suc = getCookie("access");
  const { values, handleChange } = useForm({
    email: "",
    password: "",
  });
  // const [value, setValue] = useState({
  //   email: "",
  //   password: "",
  // });

  const authorizationHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(loginActions(values.email, values.password));
  };

  // if (user && suc) {
  //   return (
  //     // Переадресовываем авторизованного пользователя на главную страницу
  //     <Navigate to="/" replace />
  //   );
  // }

  return (
    <form className={styles.default} onSubmit={authorizationHandler}>
      <h2 className="text text_type_main-medium">Вход</h2>
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
        Войти
      </Button>
      <div className={`${styles.choice} mt-20`}>
        <p className="text text_type_main-default text_color_inactive">
          Вы — новый пользователь?
        </p>
        <Link to="/register" className={`${styles.link} text text_type_main-default`}>
          Зарегистрироваться
        </Link>
      </div>
      <div className={`${styles.choice} mt-4`}>
        <p className="text text_type_main-default text_color_inactive">
          Забыли пароль?
        </p>
        <Link to="/forgot-password" className={`${styles.link} text text_type_main-default`}>
          Восстановить пароль
        </Link>
      </div>
    </form>
  );
}

export default Login;
