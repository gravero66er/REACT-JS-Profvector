import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../components/Modal/modal";

export default function Review() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="page__wrapper">
        <div className="page">
          <div className="page__title">Подготовка к проверке</div>
          <div className="page__lead">Стоимость: 10 000 р.</div>
          <div className="page__subtitle">Для предприятий:</div>
          <div className="page__content">
            <ul className="page__list">
              <li className="page__item">• заводы, фабрики, производства;</li>
              <li className="page__item">
                • кафе, рестораны, продовольственные магазины;
              </li>
              <li className="page__item">
                • садики, школы, лпу, стоматологии.
              </li>
            </ul>
          </div>
          <div className="page__subtitle">В результате:</div>
          <div className="page__content">
            <ul className="page__list">
              <li className="page__item">
                • разрабатываем необходимые документы для организации;
              </li>
              <li className="page__item">
                • готовим документы для рассмотрения дела в суде;
              </li>
              <li className="page__item">
                • осуществляем совместный визит по делу, предоставляем защиту;
              </li>
              <li className="page__item">• составляем ходатайства;</li>
              <li className="page__item">• обжалуем результаты проверки;</li>
            </ul>
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
