export default function PopupWithForm({
  title,
  name,
  isOpen,
  onClose,
  children,
}) {
  return (
    <section className={`popup popup_type_${name} ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form
          action="#"
          method="POST"
          className="popup__form"
          name={name}
          noValidate
        >
          {children}
        </form>
        <button type="button" className="popup__close" onClick={onClose} />
      </div>
    </section>
  );
}
