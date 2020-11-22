import React, { useState } from "react";
import Modal from "../components/Modal/modal";

export default function Sto() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className="container">
      <div className="page__wrapper">
        <div className="page">
          <div className="page__title">Разработка СТО</div>
          <div className="page__lead">
            (стандарт организации) на пищевую продукцию
            <br />
            Стоимость: &nbsp; <span>16 000 p. &nbsp; 10 000 р.</span>
            <br />
            Срок: от 2 до 7 недель.
          </div>
          <div className="page__subtitle"></div>
          <div className="page__content">
            Разработаем нормативный документ для Вашей продукции. Содержит
            требования по изготовлению, приёмке и контролю качества продукции.
            <br />
            СТО заменяет технические условия (ТУ) и ГОСТы. Всегда возможно
            исправить информацию по продукции или добавить новую. Стандарт
            организации не нужно нигде регистрировать. Достаточно подписи
            руководителя.
          </div>
          <div className="page__subtitle">Документ разрабатывается, если:</div>
          <div className="page__content">
            <ul className="page__list">
              <li className="page__item">
                - нет необходимого ГОСТа для Вашей продукции;
              </li>
              <li className="page__item">
                - организация увеличивает срок годности выпускаемой продукции;
              </li>
              <li className="page__item">
                - используется новая потребительская упаковка;
              </li>
              <li className="page__item">
                - применяется новая технология изготовления продукции;
              </li>
            </ul>
          </div>
          <div className="page__subtitle"></div>
          <div className="page__content">
            Документ даёт возможность далее получать декларации на пищевую
            продукцию.
          </div>
          <div className="page__subtitle">
            Для разработки СТО необходимо предоставить:
          </div>
          <div className="page__content">
            <ul className="page__list">
              <li className="page__item">- реквизиты компании;</li>
              <li className="page__item">- наименование продукции;</li>
              <li className="page__item">- краткое описание производства;</li>
              <li className="page__item">- содержание маркировки.</li>
            </ul>
          </div>
          <div className="page__subtitle"></div>
          <div className="page__content">
            Передаём Вам готовый документ по электронной почте. СТО
            распечатывается и ставится подпись руководителя.
          </div>
          <br />
          <br />
          <button
            className="footer__button"
            onClick={() => setModalActive(true)}
          >
            <p>ЗАКАЗАТЬ ЗВОНОК</p>
          </button>
        </div>
        <div className="page__pic page__pic-6"></div>
      </div>
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  );
}
