import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../components/Modal/modal";

export default function Kpasssport() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="page__wrapper">
        <div className="page">
          <div className="page__title">Канцерогенноопасный паспорт</div>
          <div className="page__lead">
            Стоимость зависит от тех. процесса и наличия канцерогенных факторов.
            <br />
            Срок: от 20 рабочих дней.
          </div>
          <div className="page__content"></div>
          <div className="page__subtitle">Для кого:</div>
          <div className="page__content"></div>
          <div className="page__subtitle"></div>
          <div className="page__content">
            <ul className="page__list">
              <li className="page__item">
                • предприятиям, в которой работники могут подвергнуться
                воздействию канцерогенных факторов;
              </li>
              <li className="page__item">
                • предприятиям с вероятностью загрязнения окружающей среды
                канцерогенами.
              </li>
            </ul>
          </div>
          <div className="page__content"></div>
          <div className="page__subtitle">В результате:</div>
          <div className="page__content">
            <ul className="page__list">
              <li className="page__item">
                • разработаем санитарно-гигиенический паспорт канцерогеноопасной
                организации;
              </li>
              <li className="page__item">
                • консультация по работе с документом.
              </li>
              <li className="page__item">
                • по предписанию органов Роспотребнадзора.
              </li>
            </ul>
            Основанием для разработки паспорта является СанПиН 1.2.2353-08
            «Канцерогенные факторы и основные требования к профилактике
            канцерогенной опасности».
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
