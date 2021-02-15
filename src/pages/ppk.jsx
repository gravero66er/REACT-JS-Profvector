import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../components/Modal/modal";

export default function Instr() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="page__wrapper">
        <div className="page">
          <div className="page__title">Разработка ППК</div>
          <div className="page__lead">
            Программа производственного контроля
            <br />
            Стоимость: 10 000 р.
            <br />
            Срок: 2 — 5 дней.
          </div>
          <div className="page__subtitle">Для кого:</div>
          <div className="page__content">
            <ul className="page__list">
              <li className="page__item">
                • предприятиям торговли и общественного питания;
              </li>
              <li className="page__item">• медицинским учреждениям;</li>
              <li className="page__item">• детским садам, школам;</li>
              <li className="page__item">
                • предприятиям гостиничного бизнеса;
              </li>
              <li className="page__item">
                • парикмахерским и салонам красоты;
              </li>
              <li className="page__item">• аптекам;</li>
            </ul>
          </div>
          <div className="page__subtitle">От Вас:</div>
          <div className="page__content">
            <ul className="page__list">
              <li className="page__item">• карточка предприятия;</li>
              <li className="page__item">• ассортиментный перечень;</li>
              <li className="page__item">• штатное расписание;</li>
              <li className="page__item">
                • список производственного оборудования.
              </li>
            </ul>
          </div>
          <div className="page__subtitle">В результате:</div>
          <div className="page__content">
            <ul className="page__list">
              <li className="page__item">
                • готовая ППК с графиком отбора проб, смывов с окружающей среды,
                физических факторов;
              </li>
              <li className="page__item">
                • консультации по работе с документом;
              </li>
              <li className="page__item">
                • отсутствие штрафов со стороны контролирующих органов.
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
