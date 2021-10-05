import React from "react";
import Form from "../Form/Form";

function Login() {
    const inputs = [
        {
            key: 1,
            label: 'E-mail',
            id: 'email',
            name: 'email',
            type: 'email'
        },
        {
            key: 2,
            label: 'Пароль',
            id: 'password',
            name: 'password',
            type: 'password',
            minLength: 8
        }]

    return (
        <Form
            title="Рады видеть!"
            inputs={inputs}
            button="Войти"
            text="Ещё не зарегистрированы?"
            link_address="/signup"
            link_name="Регистрация"
        />
    )
}

export default Login