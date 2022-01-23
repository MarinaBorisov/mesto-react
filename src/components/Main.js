import React from 'react';
import { api } from '../utils/api';
import Card from './Card';

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setuserDescription] = React.useState('');
  const [userAvatar, setuserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([user, cards]) => {
      setUserName(user.name);
      setuserDescription(user.about);
      setuserAvatar(user.avatar);
      setCards(cards);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src={userAvatar} alt="Фото профиля" />
          <span className="profile__avatar-edit" onClick={props.onEditAvatar} />
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <button type="button" className="profile__edit" onClick={props.onEditProfile}></button>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button type="button" className="profile__add" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements">
        {
          cards.map((card) =>
            <Card key={card._id} card={card} onCardClick={props.onCardClick} />
          )
        }
      </section>
    </main>
  );
}

export default Main;