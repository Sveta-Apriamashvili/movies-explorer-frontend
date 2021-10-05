import React, {useState} from "react";
import Form from "../Form/Form";

function Login(props) {

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

        const [userAuthorisation, setUserAuthorisation] = useState({
            email: "",
            password: ""
          });
        
        
          function handleChange(e) {
            const { name, value } = e.target
            setUserAuthorisation({ ...userAuthorisation, [name]: value })
          }
        
          function handleSubmit(e) {
            e.preventDefault();
        
            const {email, password} = userAuthorisation
        
            if (!email || !password) {
              return;
            }
        
            props.onLogin(email, password)
        
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
        />
    )
}

export default Login