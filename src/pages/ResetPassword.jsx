import { Button, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components"
import { useCallback, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { resetPasswordActions } from "../services/actions/resetPassword.js"
import styles from "./App.module.css"

function ResetPassword() {
    const [value, setValue] = useState({
        password: '',
        token: ''
    })
    console.log(value);

    const dispatch = useDispatch()

    const inputRef = useRef(null)
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
        alert('Icon Click Callback')
    }

    const resetHandler = useCallback((evt) => {
        evt.preventDefault()
        dispatch(resetPasswordActions(value.password, value.token))
    }, [dispatch])

    return (
        <form className={styles.default} onSubmit={resetHandler}>
            <h2 className="text text_type_main-medium">Восстановление пароля</h2>
            <PasswordInput
                placeholder='Введите новый пароль'
                onChange={(evt) => setValue({ ...value, password: evt.target.value })}
                value={value.password}
                name={'password'}
                icon="ShowIcon"
                extraClass="mt-6"
            />
            <Input
                type={'text'}
                placeholder={'Введите код из письма'}
                onChange={(evt) => setValue({ ...value, token: evt.target.value })}
                value={value.token}
                name={'name'}
                error={false}
                ref={inputRef}
                onIconClick={onIconClick}
                errorText={'Ошибка'}
                size={'default'}
                extraClass="mt-6"
            />
            <Button type="primary" size="medium" htmlType="submit" extraClass="mt-6">Сохранить</Button>
            <div className={`${styles.choice} mt-20`}>
                <p className="text text_type_main-default text_color_inactive">Вспомнили пароль?</p>
                <Link to='/login' className={`${styles.link} text text_type_main-default`}>Войти</Link>
            </div>
        </form>
    );
}

export default ResetPassword;