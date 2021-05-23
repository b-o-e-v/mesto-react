import { useState, useEffect } from "react"

import Card from './Card'
import { api } from "../utils/api"

export default function Main ({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick
}) {
  const [userName, setUserName] = useState('')
  const [userDescription, setUserDescription] = useState('')
  const [userAvatar, setUserAvatar] = useState('')
  const [cards, setCards] = useState([])

  useEffect(() => {
    api.getServerData()
      .then(([userData, initialCards]) => {
        setUserName(userData.name)
        setUserDescription(userData.about)
        setUserAvatar(userData.avatar)
        setCards(initialCards)
    })
      .catch(error => console.log(error))
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__container">
            <img src={userAvatar} alt="аватар" className="profile__avatar" />
            <button onClick={onEditAvatar} className="profile__avatar-btn" />
          </div>
          <div className="profile__about">
            <h1 className="profile__name">{userName}</h1>
            <p className="profile__description">{userDescription}</p>
          </div>
          <button onClick={onEditProfile} className="profile__edit" type="button" />
        </div>
        <button onClick={onAddPlace} className="profile__add" type="button" />
      </section>
      <section className="gallery">
        <ul className="cards">
          {cards.map(card => <Card 
            key={card._id}
            card={card}
            onCardClick={onCardClick}
          />)}
        </ul>
      </section>
      <section className="popup popup_type_delete">
        <div className="popup__container">
          <h2 className="popup__title">Вы уверены?</h2>
          <button type="submit" value="Сохранить" className="popup__save" name="btn-delete-card">Да</button>
          <button type="button" className="popup__close" />
        </div>
      </section>
    </main>
  )
}