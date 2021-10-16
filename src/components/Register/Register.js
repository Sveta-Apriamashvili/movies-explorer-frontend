import React from "react";
import Form from "../Form/Form";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

function Register(props) {

    const inputs = [{
        key: 1,
        label: 'Имя',
        id: 'name',
        name: 'name',
        type: 'text',
        minLength: 2,
        maxLength: 30,
        pattern: '[A-Za-zА-ЯЁа-яё -]+'
    },
    {
        key: 2,
        label: 'E-mail',
        id: 'email',
        name: 'email',
        type: 'email',
        pattern: '^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\\.)+[A-Za-z]+$'

    },
    {
        key: 3,
        label: 'Password',
        id: 'password',
        name: 'password',
        type: 'password',
        minLength: 8
    }]

    const {
        values,
        errors,
        isValid,
        handleChange,
    } = useFormWithValidation({});


    function handleSubmit(e) {
        e.preventDefault()
        props.onRegister(values)
    }

    return (
        <Form
            title="Добро пожаловать!"
            inputs={inputs}
            button="Зарегистрироваться"
            text="Уже зарегистрированы?"
            link_address="/signin"
            link_name="Войти"
            onSubmit={handleSubmit}
            onChange={handleChange}
            isValid={isValid}
            errors={errors}
            values={values}
        />
    )
}

export default Register