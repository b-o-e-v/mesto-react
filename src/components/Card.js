export default function Card({
  card,
  onOpenImage,
  onCardClick,
  onCardDeletePopupOpen,
  onCardLike,
  user,
}) {
  const isOwn = card.owner._id === user._id
  const isLiked = card.likes.some((i) => i._id === user._id)

  const cardDeleteButtonClassName = `card__delete ${isOwn && 'show-block'}`
  const cardLikeButtonClassName = `card__like ${isLiked && 'card__like_active'}`

  function handleClick() {
    onOpenImage()
    onCardClick(card)
  }

  function handleClickLike() {
    onCardLike(card)
  }

  function handleClickDelete() {
    onCardDeletePopupOpen(card)
  }

  return (
    <li className='card'>
      <button
        onClick={handleClickDelete}
        className={cardDeleteButtonClassName}
        type='button'
      />
      <img
        onClick={handleClick}
        className='card__img'
        alt={card.name}
        src={card.link}
      />
      <div className='card__description'>
        <h2 className='card__title'>{card.name}</h2>
        <div className='card__container'>
          <button
            className={cardLikeButtonClassName}
            type='button'
            onClick={handleClickLike}
          />
          <span className='card__like-count'>{card.likes.length}</span>
        </div>
      </div>
    </li>
  )
}
