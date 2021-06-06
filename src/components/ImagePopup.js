export default function ImagePopup({
  card, 
  isOpen, 
  isClose 
}) {
  return (
    <section
      className={`popup popup_type_open-photo ${isOpen && 'popup_opened'}`}
    >
      <div className='popup__container popup__container_type_open-photo'>
        <img className='popup__img' src={`${card.link}`} alt={card.name} />
        <h2 className='popup__name'>{card.name}</h2>
        <button onClick={isClose} type='button' className='popup__close' />
      </div>
    </section>
  )
}
