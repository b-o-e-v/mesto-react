import PopupWithForm from './PopupWithForm'

export default function EditAvatarPopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      title='Обновить аватар'
      name='update'
      buttonText='Сохранить'
      isOpen={isOpen}
      onClose={onClose}
    >
      <label htmlFor='card-link-input-avatar' className='popup__label'>
        <input
          type='url'
          placeholder='Ссылка на картинку'
          className='popup__input popup__input_string_card-link'
          name='avatar'
          required
          id='card-link-input-avatar'
        />
        <span className='popup__input-error card-link-input-avatar-error' />
      </label>
    </PopupWithForm>
  )
}
