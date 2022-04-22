import React from 'react';

import Input from '../../shared/FormElements/Input';
import './NewPlace.css'

const NewPlace = () => {
  return <form className='place-form'>
    <Input label='Title' type='text' element='input' errorText='Please enter a valid title.' />
  </form>
};

export default NewPlace;