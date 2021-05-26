export default function Profile({
  userAvatar,
  userName,
  userDescription,
  onEditAvatar,
  onEditProfile,
  onAddPlace,
}) {
  return (
    <section className='profile'>
      <div className='profile__info'>
        <div className='profile__container'>
          <img src={userAvatar} alt='аватар' className='profile__avatar' />
          <button onClick={onEditAvatar} className='profile__avatar-btn' />
        </div>
        <div className='profile__about'>
          <h1 className='profile__name'>{userName}</h1>
          <p className='profile__description'>{userDescription}</p>
        </div>
        <button
          onClick={onEditProfile}
          className='profile__edit'
          type='button'
        />
      </div>
      <button onClick={onAddPlace} className='profile__add' type='button' />
    </section>
  )
}
