import React from 'react';

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <article className="elements__element">
      <img className="elements__img"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />
      <button type="button" className="elements__trash"></button>
      <div className="elements__description">
        <h2 className="elements__title">{props.card.name}</h2>
        <div className="elements__like-container">
          <button type="button" className="elements__like-button"></button>
          <span className="elements__like-counter">{props.card.likes.length}</span>
        </div>
      </div>
    </article>
  );
}

export default Card; 