import Card from './Card'

export default function Gallery({
  cards,
  onOpenImage,
  onCardClick,
  onCardDelete,
  // onCardDeletePopupOpen,
  onCardLike,
}) {
  return (
    <section className='gallery'>
      <ul className='cards'>
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onOpenImage={onOpenImage}
            onCardClick={onCardClick}
            // onCardDeletePopupOpen={onCardDeletePopupOpen}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </ul>
    </section>
  )
}