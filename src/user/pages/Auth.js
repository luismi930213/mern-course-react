import React, { useState, useContext } from "react";

import Input from '../../shared/FormElements/Input'
import Button from '../../shared/FormElements/Button'
import { useForm } from '../../shared/hooks/form-hook'
import './Auth.css'
import { VALIDATOR_MINLENGTH, VALIDATOR_EMAIL, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import Card from "../../shared/UIElements/Card";
import { AuthContext } from "../../shared/context/auth-context";

const Auth = () => {
    const auth = useContext(AuthContext);
    const [isLogin, setIsLogin] = useState(true);
    const [formState, inputHandler, setData] = useForm({
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        },
    }, false);

    const submitHandler = e => {
        e.preventDefault();
        console.log(formState.inputs);
        auth.login()
    }

    const changeMode = () => {
        if (!isLogin) {
            setData({ ...formState.inputs, username: undefined }, formState.inputs.email.isValid && formState.inputs.password.isValid)
        } else {
            setData({ ...formState.inputs, username: { value: '', isValid: false } }, false)
        }
        setIsLogin(!isLogin)
    }

    return (<Card className="authentication">
        <h2>WELCOME, PLEASE {isLogin ? 'LOGIN' : 'SIGNUP'}!</h2>
        <hr />
        <form className="place-form" onSubmit={submitHandler}>
            {!isLogin && <Input id="username"
                label="Username"
                type="input"
                validators={[VALIDATOR_REQUIRE()]}
                onInput={inputHandler}
                element="input"
                errorText="Enter a valid username" />}
            <Input id="email"
                label="Email"
                type="input"
                validators={[VALIDATOR_EMAIL()]}
                onInput={inputHandler}
                element="input"
                errorText="Enter a valid email" />
            <Input id="password"
                label="Password"
                type="password"
                validators={[VALIDATOR_MINLENGTH(7)]}
                onInput={inputHandler}
                element="input"
                errorText="The min value of password is 7" />
            <Button type="submit" disabled={!formState.isValid}>{!isLogin ? 'SIGNUP' : 'LOGIN'}</Button>
        </form>
        <Button inverse onClick={changeMode}>SWITCH TO {isLogin ? 'SIGNUP' : 'LOGIN'}</Button>
    </Card>);
}

export default Auth;