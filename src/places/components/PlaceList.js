import React from 'react';

import Card from '../../shared/UIElements/Card'
import PlaceItem from './PlaceItem'
import './PlaceList.css'
import Button from '../../shared/FormElements/Button';

const PlaceList = props => {
    if (props.items.length === 0) {
        return <div className="place-list center">
            <Card>
                <h2>No places found</h2>
                <Button to='/places/new'>Share Place</Button>
            </Card>
        </div>
    }
    return (
        <ul className='places-list'>
            {props.items.map(place => <PlaceItem key={place.id} place={place} />)}
        </ul>
    )
}

export default PlaceList;