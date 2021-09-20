import React from "react";
import Form from "../Form/Form";

function Register() {

    const inputs = [{
        key: 1,
        label: 'Имя',
        id: 'name',
        name: 'name',
        type: 'text'
    },
    {
        key: 2,
        label: 'E-mail',
        id: 'email',
        name: 'email',
        type: 'email'

    },
    {
        key: 3,
        label: 'Password',
        id: 'password',
        name: 'password',
        type: 'password'
    }]

    return (
        <Form
            title="Добро пожаловать!"
            inputs={inputs}
            button = "Зарегистрироваться"
            text = "Уже зарегистрированы?"
            link_address = "/signin"
            link_name = "Войти"
        />
    )
}

export default Register