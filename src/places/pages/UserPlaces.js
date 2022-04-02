import React from 'react';

import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList'

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

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creatorId === userId)
    return <PlaceList items={loadedPlaces}></PlaceList>
}

export default UserPlaces;