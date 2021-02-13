import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../components/Modal/modal";

export default function Audit() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="page__wrapper">
        <div className="page">
          <div className="page__title">Аудит предприятия</div>
          <div className="page__lead">
            (выездной или дистанционный)
            <br />
            Обследование организации на соблюдение санитарного законодательства.
            <br />
            Стоимость: 6 000 р.
            <br />
            Срок: 1 — 5 дней.
          </div>
          <div className="page__subtitle">Цели аудита:</div>
          <div className="page__content">
            <ul className="page__list">
              <li className="page__item">
                - выявить нарушения на предприятии;
              </li>
              <li className="page__item">
                - подготовится к проверке Роспотребнадзора;
              </li>
              <li className="page__item">- устранить выявленные нарушения.</li>
            </ul>
          </div>
          <div className="page__subtitle">Сколько потребуется времени?</div>
          <div className="page__content">
            <ul className="page__list">
              <li className="page__item">- 1 - 2 посещения специалиста;</li>
              <li className="page__item">
                - составление отчета не более 3 дней.
              </li>
            </ul>
          </div>
          <div className="page__subtitle">В результате:</div>
          <div className="page__content">
            <ul className="page__list">
              <li className="page__item">
                - письменный отчет с рекомендациями по устранению нарушений;
              </li>
              <li className="page__item">
                - бесплатные консультации в течение одного месяца, после
                проведения аудита;
              </li>
              <li className="page__item">- уверенность в будущих проверках.</li>
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
