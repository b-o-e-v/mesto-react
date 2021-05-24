import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      title="Новое место"
      name="add"
      isOpen={isOpen}
      onClose={onClose}
    >
      <label htmlFor="card-name-input" className="popup__label">
        <input
          type="text"
          placeholder="Название"
          className="popup__input popup__input_string_card-name"
          name="name"
          required
          minLength="2"
          maxLength="30"
          id="card-name-input"
        />
        <span className="popup__input-error card-name-input-error" />
      </label>
      <label htmlFor="card-link-input" className="popup__label">
        <input
          type="url"
          placeholder="Ссылка на картинку"
          className="popup__input popup__input_string_card-link"
          name="link"
          required
          id="card-link-input"
        />
        <span className="popup__input-error card-link-input-error" />
      </label>
      <button
        type="submit"
        defaultValue="Сохранить"
        className="popup__save"
        name="btn-add-profile"
      >
        Cоздать
      </button>
    </PopupWithForm>
  );
}
