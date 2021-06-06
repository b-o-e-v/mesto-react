import Card from './Card'

export default function Gallery({
  cards,
  onCardClick,
  onCardDeletePopupOpen,
  onCardLike,
  onCardDelete,
}) {
  return (
    <section className='gallery'>
      <ul className='cards'>
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={onCardClick}
            onCardDeletePopupOpen={onCardDeletePopupOpen}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </ul>
    </section>
  )
}
