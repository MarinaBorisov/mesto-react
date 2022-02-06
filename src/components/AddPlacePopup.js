import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdatePlace({
      name: props.placeName,
      link: props.placeLink
    });
  }

  return (
  <PopupWithForm title="Новое место"
    name="place"
    isOpen={props.isOpen}
    onClose={props.onClose}
    onSubmit={handleSubmit}
  >
    <input type="text"
      className="popup__field popup__field_type_place-name"
      id="place-name-input"
      name="place-name"
      value={props.placeName}
      onChange={props.handlePlaceNameChange}
      placeholder="Название"
      required
      minLength="2"
      maxLength="30" />
    <span className="popup__input-error place-name-input-error" />
    <input type="url"
      className="popup__field popup__field_type_place-link"
      id="place-link-input"
      name="place-link"
      value={props.placeLink}
      onChange={props.handlePlaceLinkChange}
      placeholder="Ссылка на картинку"
      required
    />
    <span className="popup__input-error place-link-input-error" />
  </PopupWithForm>
  );
}

export default AddPlacePopup;