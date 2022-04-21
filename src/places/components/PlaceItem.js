import React, { useState } from 'react';

import Card from '../../shared/UIElements/Card';
import Button from '../../shared/FormElements/Button';
import Map from '../../shared/UIElements/Map';
import Modal from '../../shared/UIElements/Modal';
import './PlaceItem.css';

const PlaceItem = props => {
  const [showMap, setShowMap] = useState(false);

  const mapHandler = () => setShowMap(!showMap);

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={mapHandler}
        header={props.place.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={mapHandler}>CLOSE</Button>}
      >
        <div className="map-container">
          <Map />
        </div>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.place.image} alt={props.place.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.place.title}</h2>
            <h3>{props.place.address}</h3>
            <p>{props.place.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={mapHandler}>VIEW ON MAP</Button>
            <Button to={`/places/${props.place.id}`}>EDIT</Button>
            <Button danger>DELETE</Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
