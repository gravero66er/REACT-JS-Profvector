import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../components/Modal/modal";

export default function Sto() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="page__wrapper">
        <div className="page">
          <div className="page__title">Стандарт организации (СТО)</div>
          <div className="page__lead">
            Разработка нормативного документа для внутрикорпоративного
            использования.
            <br />
            Стоимость: 15 000 р.
            <br />
            Срок: от 2 до 7 недель.
          </div>
          <div className="page__subtitle">Документ разрабатывается, если:</div>
          <div className="page__content">
            <ul className="page__list">
              <li className="page__item">
                • нет необходимого ГОСТа для Вашей продукции;
              </li>
              <li className="page__item">
                • организация увеличивает срок годности выпускаемой продукции;
              </li>
              <li className="page__item">
                • используется новая потребительская упаковка;
              </li>
              <li className="page__item">
                • применяется новая технология изготовления продукции;
              </li>
            </ul>
          </div>
          <div className="page__subtitle"></div>
          <div className="page__subtitle">
            Необходимые документы:
          </div>
          <div className="page__content">
            <ul className="page__list">
              <li className="page__item">• реквизиты компании;</li>
              <li className="page__item">• наименование продукции;</li>
              <li className="page__item">• краткое описание производства;</li>
              <li className="page__item">• содержание маркировки.</li>
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
            <p>ОСТАВИТЬ ЗАЯВКУ</p>
          </button>
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive} />
    </motion.div>
  );
}
