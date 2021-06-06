import { useContext } from 'react'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

import Profile from './Profile'
import Gallery from './Gallery'

export default function Main({
  onOpenImage,
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  onCardDelete,
  onCardLike,
  cards,
}) {
  const currentUser = useContext(CurrentUserContext)

  return (
    <main className='main'>
      <Profile
        userAvatar={currentUser.avatar}
        userName={currentUser.name}
        userDescription={currentUser.about}
        onEditAvatar={onEditAvatar}
        onEditProfile={onEditProfile}
        onAddPlace={onAddPlace}
      />
      <Gallery
        cards={cards}
        // onOpenImage={onOpenImage}
        onCardClick={onCardClick}
        onCardDelete={onCardDelete}
        onCardLike={onCardLike}
      />
    </main>
  )
}
