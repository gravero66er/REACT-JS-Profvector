import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../components/Modal/modal";

export default function Ready() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="page__wrapper">
        <div className="page">
          <div className="page__title">Подготовка к сдаче проб</div>
          <div className="page__lead">
            Стоимость: 5 000 р. <br />
            Срок: от 2 до 7 дней.
          </div>
          <div className="page__content"></div>
          <div className="page__subtitle">Услуги:</div>
          <div className="page__content"></div>
          <div className="page__subtitle"></div>
          <div className="page__content">
            <ul className="page__list">
              <li className="page__item">• отбор проб продукции;</li>
              <li className="page__item">
                • доставка продукции до лаборатории;
              </li>
              <li className="page__item">
                • проведение лабораторных исследований; 
              </li>
              <li className="page__item">
                • передача протоколов лабораторных испытаний.
              </li>
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
