import {
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { FormEvent, useCallback } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "../hooks/hooks";
import { useForm } from "../hooks/useForm";
import { forgotPasswordActions } from "../services/actions/forgotPassword";
import { getCookie } from "../utils/token";
import styles from "./App.module.css";

function ForgotPassword() {
  // const [value, setValue] = useState({
  //   email: "",
  // });

  const { values, handleChange } = useForm({
    email: "",
  });
  const dispatch = useDispatch();
  const success = useSelector((state) => state.forgotPassword.success);
  const user = useSelector((state) => state.login.user);
  const suc = getCookie("access");

  const sendEmail = useCallback(
    (evt: FormEvent<HTMLFormElement>) => {
      evt.preventDefault();
      dispatch(forgotPasswordActions(values.email));
    },
    [dispatch]
  );

  if (success) {
    return <Navigate to={"/reset-password"} />;
  }

  if (user && suc) {
    return (
      // Переадресовываем авторизованного пользователя на главную страницу
      <Navigate to="/" replace />
    );
  }

  return (
    <form className={styles.default} onSubmit={sendEmail}>
      <h2 className="text text_type_main-medium">Восстановление пароля</h2>
      <EmailInput
        onChange={handleChange}
        value={values.email}
        name={"email"}
        extraClass="mt-6"
        placeholder="Укажите e-mail"
      />
      <Button type="primary" size="medium" htmlType="submit" extraClass="mt-6">
        Восстановить
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

export default ForgotPassword;
