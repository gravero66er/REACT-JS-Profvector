import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../components/Modal/modal";

export default function Hassp() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="page__wrapper">
        <div className="page">
          <div className="page__title">Система ХАССП</div>
          <div className="page__lead">
            Разработка, внедрение, обучение. Для всех регионов России.
            <br />
            Стоимость: 40 000 р.
            <br />
            Срок: от 1 до 4 недель.
          </div>
          <div className="page__subtitle">Для кого?</div>
          <div className="page__content">
            <ul className="page__list">
              <li className="page__item">
                • предприятия общественного питания (рестораны, кафе, столовые,
                кофейни, кондитерские);
              </li>
              <li className="page__item">
                • магазины розничной торговли с собственными цехами для
                приготовления блюд / полуфабрикатов;
              </li>
              <li className="page__item">
                • производители алкогольных и безалкогольных напитков;
              </li>
              <li className="page__item">
                • гостиничный бизнес, на территории которых имеется кухня;
              </li>
              <li className="page__item">• и т. д.</li>
            </ul>
          </div>
          <div className="page__subtitle">От Вас:</div>
          <div className="page__content">
            <ul className="page__list">
              <li className="page__item">• ассортимент продукции / меню;</li>
              <li className="page__item">• список сотрудников;</li>
              <li className="page__item">
                • схема расположения производственных помещений;
              </li>
              <li className="page__item">
                • список специализированного транспорта.
              </li>
            </ul>
          </div>
          <div className="page__subtitle">В результате:</div>
          <div className="page__content">
            <ul className="page__list">
              <li className="page__item">• готовая документация ХАССП;</li>
              <li className="page__item">• обучение персонала;</li>
              <li className="page__item">
                • отсутствие штрафов со стороны контролирующих органов;
              </li>
              <li className="page__item">
                • отсутствие жалоб со стороны клиентов.
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
