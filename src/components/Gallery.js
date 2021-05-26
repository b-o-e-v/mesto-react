import Card from './Card'

export default function Gallery({
  userID,
  cards,
  onCardClick,
  onCardDeletePopupOpen,
}) {
  return (
    <section className='gallery'>
      <ul className='cards'>
        {cards.map((card) => (
          <Card
            userID={userID}
            ownerID={card.owner._id}
            key={card._id}
            card={card}
            onCardClick={onCardClick}
            onCardDeletePopupOpen={onCardDeletePopupOpen}
          />
        ))}
      </ul>
    </section>
  )
}
