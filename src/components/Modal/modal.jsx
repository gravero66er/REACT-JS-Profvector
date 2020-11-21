import React from "react";
import emailjs from "emailjs-com";

const Modal = ({ active, setActive }) => {
  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_0sykbyb",
        e.target,
        "user_nxQF5iYdWei1iVw3ygypv"
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={e => e.stopPropagation()}
      >
        <div className="modal__form">
          <form onSubmit={sendEmail}>
            <div className="modal__input">
              <input type="text" placeholder="Ваше имя" name="name" />
            </div>
            <div className="modal__input">
              <input type="email" placeholder="Ваш e-mail" name="email" />
            </div>
            <div className="modal__input">
              <input type="tel" placeholder="Ваш номер телефона" name="phone"/>
            </div>
            <button type="submit" className="modal__button">
              ОТПРАВИТЬ
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
