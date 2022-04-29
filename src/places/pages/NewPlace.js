import React, { useCallback, useReducer } from 'react';

import Input from '../../shared/FormElements/Input';
import Button from '../../shared/FormElements/Button';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import './NewPlace.css'

const formReducer = (state, action) => {
  switch (action.type) {
    case 'inputChange':
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid
      }
    default:
      return state
  }
}

const NewPlace = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      }
    },
    isValid: false
  })

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({ type: 'inputChange', inputId: id, value: value, isValid: isValid })
  }, [])
  
  return (<form className='place-form'>
    <Input
      id='title'
      label='Title'
      type='text'
      validators={[VALIDATOR_REQUIRE()]}
      element='input'
      onInput={inputHandler}
      errorText='Please enter a valid title.' />
    <Input
      id='description'
      label='Description'
      validators={[VALIDATOR_MINLENGTH(5)]}
      element='textarea'
      onInput={inputHandler}
      errorText='Please enter a valid description.' />
    <Button type="submit" disabled={!formState.isValid}>Add Place</Button>
  </form>)
};

export default NewPlace;