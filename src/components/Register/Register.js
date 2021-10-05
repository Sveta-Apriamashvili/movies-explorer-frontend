import React, {useState} from "react";
import Form from "../Form/Form";

function Register(props) {

    const inputs = [{
        key: 1,
        label: 'Имя',
        id: 'name',
        name: 'name',
        type: 'text',
        minLength: 2,
        maxLength:30
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
        type: 'password',
        minLength: 8
    }]

    const [userRegistration, setUserRegistration] = useState({
        name: "",
        email: "",
        password: ""
      });
    
      function handleChange(e) {
        const { name, value } = e.target
        setUserRegistration({ ...userRegistration, [name]: value })
      }
    
      function handleSubmit(e) {
        e.preventDefault()
        const {name, email, password} = userRegistration
        props.onRegister(name, email, password)
      }

    return (
        <Form
            title="Добро пожаловать!"
            inputs={inputs}
            button = "Зарегистрироваться"
            text = "Уже зарегистрированы?"
            link_address = "/signin"
            link_name = "Войти"
            onSubmit={handleSubmit}
            onChange={handleChange}
        />
    )
}

export default Register