import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../components/Modal/modal";

export default function NameLists() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="page__wrapper">
        <div className="page">
          <div className="page__title">Контингенты и поименные списки</div>
          <div className="page__lead">
            Стоимость зависит от количества работников на предприятии.
            <br />
            Срок: от 1 рабочего дня.
          </div>
          <div className="page__subtitle"></div>
          <div className="page__content">
            Для работников:
            <ul className="page__list">
              <li className="page__item">• пищевой промышленности;</li>
              <li className="page__item">• общественного питания;</li>
              <li className="page__item">• торговли;</li>
              <li className="page__item">• медицинских организаций;</li>
              <li className="page__item">• детских учреждений;</li>
              <li className="page__item">• водопроводных сооружений;</li>
              <li className="page__item">
                • занятых на тяжелых работах с вредными и (или) опасными
                условиями труда;
              </li>
              <li className="page__item">• и др.</li>
            </ul>
          </div>
          <div className="page__content">
            Корректировка списка контингента происходит при изменениях в
            организации: ввод новых рабочих мест, улучшение условий труда,
            реорганизация. Поименные списки разрабатываются ежегодно.
          </div>
          <div className="page__subtitle">В результате:</div>
          <div className="page__content">
            <ul className="page__list">
              <li className="page__item">
                • разработанный список контингента работников по медосмотру;
              </li>
              <li className="page__item">
                • разработанные поименные списки, напраления;
              </li>
              <li className="page__item">
                • консультации по работе с документам.
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
