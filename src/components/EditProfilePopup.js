import PopupWithForm from "./PopupWithForm";

export default function EditProfilePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit"
      isOpen={isOpen}
      onClose={onClose}
    >
      <label htmlFor="name-input" className="popup__label">
        <input
          type="text"
          placeholder="Имя"
          className="popup__input popup__input_string_name"
          name="name"
          required
          minLength="2"
          maxLength="40"
          id="name-input"
          defaultValue=""
        />
        <span className="popup__input-error name-input-error" />
      </label>
      <label htmlFor="job-input" className="popup__label">
        <input
          type="text"
          placeholder="О себе"
          className="popup__input popup__input_string_job"
          name="about"
          required
          minLength="2"
          maxLength="200"
          id="job-input"
          defaultValue=""
        />
        <span className="popup__input-error job-input-error" />
      </label>
      <button
        type="submit"
        defaultValue="Сохранить"
        className="popup__save"
        name="btn-edit-profile"
      >
        Сохранить
      </button>
    </PopupWithForm>
  );
}
