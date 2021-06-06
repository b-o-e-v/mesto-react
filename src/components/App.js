import { useState, useEffect } from 'react'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

import PopupWithForm from './PopupWithForm'
import EditProfilePopup from './EditProfilePopup'
import AddPlacePopup from './AddPlacePopup'
import EditAvatarPopup from './EditAvatarPopup'
import ImagePopup from './ImagePopup'

import { CurrentUserContext } from '../contexts/CurrentUserContext'

import { api } from '../utils/api'

export default function App() {
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false)
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = useState(false)

  const [currentUser, setCurrentUser] = useState({})
  const [selectedCard, setSelectedCard] = useState({ name: '', link: '' })
  const [cards, setCards] = useState([])

  const [isSubmitForm, setIsSubmitForm] = useState(false)

  useEffect(() => {
    api
      .getServerData()
      .then(([userData, initialCards]) => {
        setCurrentUser(userData)
        setCards(initialCards)
      })
      .catch((error) => console.log(error))
  }, [])

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleImageCardClick() {
    setIsImagePopupOpen(true)
  }

  function handleDeleteCardClick(card) {
    setIsDeleteCardPopupOpen(true)
    setSelectedCard(card)
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsDeleteCardPopupOpen(false)
    setIsImagePopupOpen(false)
    setSelectedCard({ name: '', link: '' })
  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  function handleLikeCard(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id)

    api
      .likeCard(card._id, !isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c))
        setCards(newCards)
      })
      .catch((error) => console.log(error))
  }

  function handleDeleteCard(card) {
    setIsSubmitForm(true)
    api
      .deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter((c) => c._id !== card._id)
        setCards(newCards)
        closeAllPopups()
        setIsSubmitForm(false)
      })
      .catch((error) => console.log(error))
  }

  function handleUpdateUser(data) {
    setIsSubmitForm(true)
    api
      .setUserInfo(data)
      .then((res) => {
        setCurrentUser(res)
        closeAllPopups()
        setIsSubmitForm(false)
      })
      .catch((error) => console.log(error))
  }

  function handleUpdateAvatar(data) {
    setIsSubmitForm(true)
    api
      .updateAvatar(data)
      .then((res) => {
        setCurrentUser(res)
        closeAllPopups()
        setIsSubmitForm(false)
      })
      .catch((error) => console.log(error))
  }

  function handleAddPlaceSubmit(card) {
    setIsSubmitForm(true)
    api
      .addCard(card)
      .then((res) => {
        setCards([res, ...cards])
        closeAllPopups()
        setIsSubmitForm(false)
      })
      .catch((error) => console.log(error))
  }

  function handleClickDelete(e) {
    e.preventDefault()
    handleDeleteCard(selectedCard)
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Header />
        <Main
          onOpenImage={handleImageCardClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardDeletePopupOpen={handleDeleteCardClick}
          onCardLike={handleLikeCard}
          onCardDelete={handleDeleteCard}
          cards={cards}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateProfile={handleUpdateUser}
          isSubmitForm={isSubmitForm}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
          isSubmitForm={isSubmitForm}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          isSubmitForm={isSubmitForm}
        />
        <PopupWithForm
          title='Вы уверены?'
          name='delete'
          buttonText={isSubmitForm ? 'Удаление...' : 'Да'}
          isOpen={isDeleteCardPopupOpen}
          onClose={closeAllPopups}
          onSubmit={handleClickDelete}
        />
        <ImagePopup
          card={selectedCard}
          isOpen={isImagePopupOpen}
          isClose={closeAllPopups}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  )
}
