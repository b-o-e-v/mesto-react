import { useState } from "react"

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

import PopupWithForm from "./PopupWithForm"
import ImagePopup from './ImagePopup'

export default function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState("");

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard('');
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <PopupWithForm
        title='Редактировать профиль'
        name='edit'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <label htmlFor="name-input" className="popup__label">
          <input type="text" placeholder="Имя" className="popup__input popup__input_string_name" name="name" required
            minLength='2' maxLength='40' id="name-input" defaultValue="" />
          <span className="popup__input-error name-input-error"></span>
        </label>
        <label htmlFor="job-input" className="popup__label">
          <input type="text" placeholder="О себе" className="popup__input popup__input_string_job" name="about" required
            minLength='2' maxLength='200' id="job-input" defaultValue="" />
          <span className="popup__input-error job-input-error"></span>
        </label>
        <button type="submit" defaultValue="Сохранить" className="popup__save" name="btn-edit-profile">Сохранить</button>
      </PopupWithForm>
      <PopupWithForm
        title='Новое место'
        name='add'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <label htmlFor="card-name-input" className="popup__label">
          <input type="text" placeholder="Название" className="popup__input popup__input_string_card-name" name="name"
            required minLength='2' maxLength='30' id="card-name-input" />
          <span className="popup__input-error card-name-input-error"></span>
        </label>
        <label htmlFor="card-link-input" className="popup__label">
          <input type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_string_card-link"
            name="link" required id="card-link-input" />
          <span className="popup__input-error card-link-input-error"></span>
        </label>
        <button type="submit" defaultValue="Сохранить" className="popup__save" name="btn-add-profile">Cоздать</button>
      </PopupWithForm>
      <PopupWithForm
        title='Обновить аватар'
        name='update'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <label htmlFor="card-link-input-avatar" className="popup__label">
          <input type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_string_card-link"
            name="avatar" required id="card-link-input-avatar" />
          <span className="popup__input-error card-link-input-avatar-error"></span>
        </label>
        <button type="submit" defaultValue="Сохранить" className="popup__save" name="btn-update-avatar">Сохранить</button>
      </PopupWithForm>
      <ImagePopup 
        card={selectedCard}
        isClose={closeAllPopups}
      />
      <Footer />
    </div>
  );
}
