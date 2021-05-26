import { useState, useEffect } from 'react'

import Profile from './Profile'
import Gallery from './Gallery'

import { api } from '../utils/api'

export default function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  onCardDeletePopupOpen,
}) {
  const [userID, setUserID] = useState('')
  const [userName, setUserName] = useState('')
  const [userDescription, setUserDescription] = useState('')
  const [userAvatar, setUserAvatar] = useState('')

  const [cards, setCards] = useState([])

  useEffect(() => {
    api
      .getServerData()
      .then(([userData, initialCards]) => {
        setUserName(userData.name)
        setUserDescription(userData.about)
        setUserAvatar(userData.avatar)
        setUserID(userData._id)
        setCards(initialCards)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <main className='main'>
      <Profile
        userAvatar={userAvatar}
        userName={userName}
        userDescription={userDescription}
        onEditAvatar={onEditAvatar}
        onEditProfile={onEditProfile}
        onAddPlace={onAddPlace}
      />
      <Gallery
        userID={userID}
        cards={cards}
        onCardClick={onCardClick}
        onCardDeletePopupOpen={onCardDeletePopupOpen}
      />
    </main>
  )
}
