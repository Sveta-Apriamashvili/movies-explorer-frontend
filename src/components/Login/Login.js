import React from "react";
import Form from "../Form/Form";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";


function Login(props) {

  const inputs = [
    {
      key: 1,
      label: 'E-mail',
      id: 'email',
      name: 'email',
      type: 'email',
      pattern: '^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\\.)+[A-Za-z]+$'
    },
    {
      key: 2,
      label: 'Пароль',
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
    e.preventDefault();
    props.onLogin(values)

  }

  return (
    <Form
      title="Рады видеть!"
      inputs={inputs}
      button="Войти"
      text="Ещё не зарегистрированы?"
      link_address="/signup"
      link_name="Регистрация"
      onSubmit={handleSubmit}
      onChange={handleChange}
      isValid={isValid}
      errors={errors}
      values={values}
    />
  )
}

export default Login