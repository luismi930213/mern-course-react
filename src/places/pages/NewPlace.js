import React from 'react';

import Input from '../../shared/FormElements/Input';
import Button from '../../shared/FormElements/Button';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import './PlaceForm.css'
import { useForm } from '../../shared/hooks/form-hook';

const NewPlace = () => {
  const [formState, inputHandler] = useForm({
    title: {
      value: '',
      isValid: false
    },
    description: {
      value: '',
      isValid: false
    },
    address: {
      value: '',
      isValid: false
    }
  }, false)

  const submitHandler = e => {
    e.preventDefault();
    console.log(formState.inputs);
  }

  return (<form className='place-form' onSubmit={submitHandler}>
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
    <Input
      id='address'
      label='Address'
      validators={[VALIDATOR_REQUIRE()]}
      element='input'
      onInput={inputHandler}
      errorText='Please enter a valid address.' />
    <Button type="submit" disabled={!formState.isValid}>Add Place</Button>
  </form>)
};

export default NewPlace;