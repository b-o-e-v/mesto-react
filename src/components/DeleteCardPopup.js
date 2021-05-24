import PopupWithForm from "./PopupWithForm";

export default function DeleteCardPopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      title="Вы уверены?"
      name="delete"
      isOpen={isOpen}
      onClose={onClose}
    >
      <button
        type="submit"
        value="Сохранить"
        className="popup__save"
        name="btn-delete-card"
      >
        Да
      </button>
    </PopupWithForm>
  );
}
