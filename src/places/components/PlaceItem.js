import React, { useState, useContext } from 'react';

import Card from '../../shared/UIElements/Card';
import Button from '../../shared/FormElements/Button';
import Map from '../../shared/UIElements/Map';
import Modal from '../../shared/UIElements/Modal';
import './PlaceItem.css';
import { AuthContext } from '../../shared/context/auth-context';

const PlaceItem = props => {
  const auth = useContext(AuthContext);
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setConfirmModal] = useState(false);

  const mapHandler = () => setShowMap(!showMap);
  const confirmHandler = () => setConfirmModal(!showConfirmModal);
  const deleteHandler = () => {
    setConfirmModal(false);
    console.log('DELETING.......')
  };

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
      <Modal header='Warning!!' footerClass="place-item__modal-actions"
        show={showConfirmModal}
        footer={<React.Fragment>
          <Button danger onClick={deleteHandler}>OK</Button>
          <Button inverse onClick={confirmHandler}>Cancel</Button>
        </React.Fragment>}>
        <p>Are you sure, this can't be undone!</p>
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
            {auth.isLoggedIn && <Button to={`/places/${props.place.id}`}>EDIT</Button>}
            {auth.isLoggedIn && <Button danger onClick={confirmHandler}>DELETE</Button>}
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
