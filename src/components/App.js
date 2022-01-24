import React, { useState } from 'react'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});


  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  return (
    <>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm title="Редактировать профиль"
        name="profile"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
        <input type="text"
          className="popup__field popup__field_type_name"
          id="name-input"
          name="name"
          defaultValue=""
          placeholder="Имя"
          required
          minLength="2"
          maxLength="40" />
        <span className="popup__input-error name-input-error" />
        <input type="text"
          className="popup__field popup__field_type_description"
          id="description-input"
          name="description"
          defaultValue=""
          placeholder="Профессия"
          required
          minLength="2"
          maxLength="200" />
        <span className="popup__input-error description-input-error" />
      </PopupWithForm>
      <PopupWithForm title="Новое место"
        name="place"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
        <input type="text"
          className="popup__field popup__field_type_place-name"
          id="place-name-input"
          name="place-name"
          defaultValue=""
          placeholder="Название"
          required
          minLength="2"
          maxLength="30" />
        <span className="popup__input-error place-name-input-error" />
        <input type="url"
          className="popup__field popup__field_type_place-link"
          id="place-link-input"
          name="place-link"
          defaultValue=""
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__input-error place-link-input-error" />
      </PopupWithForm>
      <PopupWithForm title="Обновить аватар"
        name="avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
        <input type="url"
          className="popup__field popup__field_type_avatar-link"
          id="avatar-link-input"
          name="avatar-link"
          defaultValue=""
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__input-error avatar-link-input-error" />
      </PopupWithForm>
      <PopupWithForm title="Вы уверены?"
        name="confirm"
      />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

    </>
  );
}

export default App;
