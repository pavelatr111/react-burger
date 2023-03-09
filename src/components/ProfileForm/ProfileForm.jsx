import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserActions, updateUserActions } from "../../services/actions/user";
import styles from "./ProfileForm.module.css"

function ProfileForm() {

    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getUserActions());
    // }, [dispatch])

    const userName = useSelector(state => state.user.user.name);
    const userEmail = useSelector(state => state.user.user.email);

    const [value, setValue] = useState({
        name: userName,
        email: userEmail,
        password: ''
    })

    const updateUser = (evt) => {
        evt.preventDefault();
        dispatch(updateUserActions(value.name, value.email, value.password));
    }

    const cancelUpdate = () => {
        setValue({
            name: userName,
            email: userEmail,
            password: ''
        })
    }


  const inputRef = useRef(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
  };

  return (
    <form className={styles.form} onSubmit={updateUser}>
      <Input
        type={"text"}
        placeholder={"Имя"}
        onChange={(evt) => setValue({ ...value, name: evt.target.value })}
        value={value.name}
        name={"name"}
        error={false}
        ref={inputRef}
        onIconClick={() => onIconClick()}
        errorText={"Ошибка"}
        size={"default"}
        icon="EditIcon"
      />
      <Input
        type={"email"}
        placeholder={"Логин"}
        onChange={(evt) => setValue({ ...value, email: evt.target.value })}
        value={value.email}
        name={"email"}
        icon="EditIcon"
        extraClass="mt-6"
        ref={inputRef}
        onIconClick={() => onIconClick()}
      />
      <Input
        type={"password"}
        placeholder={"Пароль"}
        onChange={(evt) => setValue({ ...value, password: evt.target.value })}
        ref={inputRef}
        onIconClick={() => onIconClick()}
        value={value.password}
        name={"password"}
        icon="EditIcon"
        extraClass="mt-6"
      />
      <Button
        type="primary"
        size="medium"
        htmlType="reset"
        extraClass="mt-6"
        onClick={cancelUpdate}
      >
        Отмена
      </Button>
      <Button type="primary" size="medium" htmlType="submit" extraClass="mt-6">
        Сохранить
      </Button>
    </form>
  );
}

export default ProfileForm;
