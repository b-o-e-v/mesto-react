export default function PopupWithForm({
  title,
  name,
  buttonText,
  isOpen,
  onClose,
  children,
  onSubmit,
}) {
  return (
    <section className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
      <div className='popup__container'>
        <h2 className='popup__title'>{title}</h2>
        <form
          action='#'
          method='POST'
          className='popup__form'
          onSubmit={onSubmit}
          name={name}
          noValidate
        >
          {children}
          <button
            type='submit'
            defaultValue='Сохранить'
            className='popup__save'
            name='btn-add-profile'
          >
            {buttonText}
          </button>
        </form>
        <button type='button' className='popup__close' onClick={onClose} />
      </div>
    </section>
  )
}
