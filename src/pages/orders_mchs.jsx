import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../components/Modal/modal";

export default function Orders() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="page__wrapper">
        <div className="page">
          <div className="page__title">Приказы, инструкции, журналы (МЧС)</div>
          <div className="page__lead">
            Стоимость зависит от количества необходимых документов
            <br />
            Срок: от 1 дня
          </div>
          <div className="page__subtitle"></div>
          <div className="page__content">
            Разработаем комплект документов по пожарной безопасности,
            электробезопасности, документы по ГО и ЧС:
            <br />
            <br />
            <div className="page__subtitle"></div>
            <ul className="page__list">
              <li className="page__item">
                - приказ о назначении ответственного за пожарную безопасность;
              </li>
              <li className="page__item">
                - программа проведения вводного противопожарного инструктажа;
              </li>
              <li className="page__item">
                - программа проведения первичного противопожарного инструктажа
                на рабочем месте;
              </li>
              <li className="page__item">
                - журнал учета инструктажей по пожарной безопасности;
              </li>
              <li className="page__item">
                - приказ о назначении ответственного за электрохозяйство;
              </li>
              <li className="page__item">
                - приказ о назначении ответственного за проведение мероприятий по ГО и ЧС;
              </li>
              <li className="page__item">
                - журнал регистрации вводного инструктажа по ГО и ЧС;
              </li>
              <li className="page__item">
                - и другие документы.
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
