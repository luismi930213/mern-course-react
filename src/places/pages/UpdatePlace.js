import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/FormElements/Input';
import Button from '../../shared/FormElements/Button';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import './PlaceForm.css'
import { useForm } from '../../shared/hooks/form-hook';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'House',
    description: 'This is my house',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: 'Nuevo LLano, Holguin, Cuba',
    location: {
      latitude: 40.7484405,
      longitude: -73.9878584
    },
    creatorId: 'u1'
  },
  {
    id: 'p2',
    title: 'Work',
    description: 'This is my work',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: 'Peralta, Holguin, Cuba',
    location: {
      latitude: 40.7585405,
      longitude: -72.9878584
    },
    creatorId: 'u2'
  }
]

const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true)
  const placeId = useParams().placeId
  const [formState, inputHandler, setData] = useForm({
    title: {
      value: '',
      isValid: false
    },
    description: {
      value: '',
      isValid: false
    },
  }, false);

  const place = DUMMY_PLACES.find(p => p.id === placeId)

  useEffect(() => {
    setData({
      title: {
        value: place?.title,
        isValid: true
      },
      description: {
        value: place?.description,
        isValid: true
      },
    }, true);
    setIsLoading(false)
  }, [setData, place])

  if (!place) {
    return <div className='center'>
      <h2>Cloud not find the place!</h2>
    </div>
  }

  const submitHandler = e => {
    e.preventDefault();
    console.log(formState.inputs);
  }

  if (isLoading) {
    return <div className='center'>
      <h2>Loading...</h2>
    </div>
  }

  return (
    <form className='place-form' onSubmit={submitHandler}>
      <Input
        id='title'
        label='Title'
        type='text'
        validators={[VALIDATOR_REQUIRE()]}
        element='input'
        value={formState.inputs.title.value}
        valid={formState.inputs.title.isValid}
        onInput={inputHandler}
        errorText='Please enter a valid title.' />
      <Input
        id='description'
        label='Description'
        validators={[VALIDATOR_MINLENGTH(5)]}
        element='textarea'
        value={formState.inputs.description.value}
        valid={formState.inputs.description.isValid}
        onInput={inputHandler}
        errorText='Please enter a valid description.' />
      <Button type="submit" disabled={!formState.isValid}>EDIT Place</Button>
    </form>
  )
};

export default UpdatePlace;