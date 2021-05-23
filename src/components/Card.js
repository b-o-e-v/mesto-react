export default function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    <li className="card">
      <button className="card__delete" type="button" />
      <img
        onClick={handleClick}
        className="card__img" 
        alt={card.name} 
        src={card.link}
      />
      <div className="card__description">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__container">
          <button className="card__like" type="button" />
          <span className="card__like-count">{card.likes.length}</span>
        </div>
      </div>
    </li>
  )
}