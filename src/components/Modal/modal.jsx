import React from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Modal = ({ active, setActive }) => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_0sykbyb",
        e.target,
        "user_nxQF5iYdWei1iVw3ygypv"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const notify = () => toast("СООБЩЕНИЕ ОТПРАВЛЕНО!");

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
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
              <input type="tel" placeholder="Ваш номер телефона" name="phone" />
            </div>
            <div className="modal__input modal__message">
              <input type="text" placeholder="Ваш вопрос" name="message" />
            </div>
            <button type="submit" className="modal__button" onClick={notify}>
              ОТПРАВИТЬ
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
