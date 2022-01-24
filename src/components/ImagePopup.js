import React from 'react';

function ImagePopup({card, onClose}) {
  return (
    <div className={`popup popup_type_img ${card.link ? "popup_opened" : ""}`}>
      <div className="popup__container popup__container_type_img">
        <button type="button" className="popup__close" aria-label="Закрыть попап" onClick={onClose} />
        <figure className="popup__figure">
          <img className="popup__img" src={card.link} alt={card.name} />
          <figcaption className="popup__caption">{card.name}</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup; 