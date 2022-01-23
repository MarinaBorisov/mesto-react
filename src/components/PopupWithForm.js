import React from 'react';

function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <button type="button" className="popup__close" aria-label="Закрыть попап" onClick={props.onClose} />
        <h2 className="popup__title">{props.title}</h2>
        <form className={`popup__form popup__form_type_${props.name}`} name={`popup-${props.name}`}>
          {props.children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm; 