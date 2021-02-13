import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../components/Modal/modal";

export default function Projects() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="page__wrapper">
        <div className="page">
          <div className="page__title">Проектирование ресторана</div>
          <div className="page__lead"></div>
          <div className="page__content"></div>
          <div className="page__subtitle">Услуги:</div>
          <div className="page__content"></div>
          <div className="page__subtitle"></div>
          <div className="page__content">
            <ul className="page__list">
              <li className="page__item">
                - технологическое проектирование предприятий общественного
                питания; 
              </li>
              <li className="page__item">
                - разработка проекта в соответствии со строительными нормами и
                санитарными правилами;
              </li>
              <li className="page__item">
                - подбор помещения и оборудования для предприятия;
              </li>
              <li className="page__item">
                - помощь с дизайн-проектом заведения.
              </li>
            </ul>
            Технологическое проектирование предприятий любого формата: пекарни,
            кофейни, столовые, рестораны, фабрики-кухни и т.д.
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
