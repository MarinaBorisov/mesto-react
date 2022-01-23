import React from 'react';

function ImagePopup(props) {
  return (
    <div className={`popup popup_type_img ${(Object.keys(props.card).length !== 0) && "popup_opened"} && 'popup_opened'}`}>
      <div className="popup__container popup__container_type_img">
        <button type="button" className="popup__close" aria-label="Закрыть попап" onClick={props.onClose} />
        <figure className="popup__figure">
          <img className="popup__img" src={props.card.link} alt={props.card.name} />
          <figcaption className="popup__caption">{props.card.name}</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup; 