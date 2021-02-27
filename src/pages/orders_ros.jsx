import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../components/Modal/modal";

export default function OrdersRos() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="page__wrapper">
        <div className="page">
          <div className="page__title">
            Приказы, инструкции, журналы (Роструд)
          </div>
          <div className="page__lead">
            Стоимость зависит от количества необходимых документов
            <br />
            Срок: от 1 дня
          </div>
          <div className="page__subtitle"></div>
          <div className="page__content">
            Разработаем локально - нормативные акты для Вашей организации:
            <div className="page__subtitle"></div>
            <ul className="page__list">
              <li className="page__item">• положение о службе охраны труда</li>
              <li className="page__item">
                • приказ о создании постоянно действующей комиссии по проверке
                знаний требований охраны труда;
              </li>
              <li className="page__item">
                • приказ об организации обучения по охране труда;
              </li>
              <li className="page__item">
                • программа обучения руководителей и специалистов по охране
                труда;
              </li>
              <li className="page__item">
                • программа обучения работников рабочих профессий по охране
                труда;
              </li>
              <li className="page__item">
                • программа проведения вводного инструктажа по охране труда;
              </li>
              <li className="page__item">
                • журнал регистрации вводного инструктажа по охране труда;
              </li>
              <li className="page__item">
                • журнал регистрации инструктажа на рабочем месте;
              </li>
              <li className="page__item">
                • инструкции по охране труда для работников по
                должностям/профессиям/видам работ;
              </li>
              <li className="page__item">• и другие документы.</li>
            </ul>
          </div>
          <div className="page__subtitle"></div>
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
