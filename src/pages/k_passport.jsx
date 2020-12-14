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
          <div className="page__content">
            Разработаем для Вас санитарно-гигиенический паспорт
            канцерогеноопасной организации. Документ необходим предприятиям, в
            которой работники могут подвергнуться воздействию канцерогенных
            факторов. Также необходим, если существует опасность загрязнения
            окружающей среды канцерогенами. Разрабатываются профилактические
            мероприятия.
          </div>
          <div className="page__subtitle"></div>
          <div className="page__content">
            Требования и основания для разработки является СанПиН 1.2.2353-08
            «Канцерогенные факторы и основные требования к профилактике
            канцерогенной опасности».
          </div>
          <div className="page__subtitle"></div>
          <div className="page__content">
            Паспорт в первую очередь необходим производствам:
            <ul className="page__list">
              <li className="page__item">- металлообрабатывающим;</li>
              <li className="page__item">- угольным;</li>
              <li className="page__item">- коксовым;</li>
              <li className="page__item">- деревообрабатывающим;</li>
              <li className="page__item">- горнодобывающим;</li>
              <li className="page__item">- нефтеперерабатывающим;</li>
              <li className="page__item">- химическим;</li>
              <li className="page__item">- и др.</li>
            </ul>
          </div>
          <div className="page__content">
            Срок действия паспорта 5 лет, либо подлежит переоформлению по
            причинам:
          </div>
          <div className="page__subtitle"></div>
          <div className="page__content">
            Паспорт в первую очередь необходим производствам:
            <ul className="page__list">
              <li className="page__item">- при реконструкции предприятия;</li>
              <li className="page__item">
                - при изменении технологического процесса;
              </li>
              <li className="page__item">
                - по предписанию органов Роспотребнадзора.
              </li>
            </ul>
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
      </div>
      <Modal active={modalActive} setActive={setModalActive} />
    </motion.div>
  );
}
