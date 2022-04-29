import React, { useReducer, useEffect } from 'react';

import './Input.css'
import { validate } from '../util/validators'

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'onChange':
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators)
            }
        case 'onTouch':
            return {
                ...state,
                isTouch: true,
            }
        default:
            return state;
    }
}

const Input = props => {
    const [inputState, dispatch] = useReducer(inputReducer, { value: '', isValid: false, isTouch: false });
    const { id, onInput } = props;
    const { value, isValid } = inputState;

    useEffect(() => {
        onInput(id, value, isValid)
    }, [id, value, isValid, onInput])

    const changeHandler = event => {
        dispatch({ type: 'onChange', val: event.target.value, validators: props.validators });
    }

    const touchHanders = () => {
        dispatch({ type: 'onTouch' })
    }

    const input = <input id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHanders}
        value={inputState.value} />
    const textarea = <textarea id={props.id}
        onBlur={touchHanders}
        rows={props.rows || 3}
        onChange={changeHandler} value={inputState.value}></textarea>
    const element = props.element === 'input' ? input : textarea;
    return <div className={`form-control ${!inputState.isValid && inputState.isTouch && 'form-control--invalid'}`}>
        <label htmlFor={props.id}>{props.label}</label>
        {element}
        {!inputState.isValid && inputState.isTouch && <p>{props.errorText}</p>}
    </div>
}

export default Input;