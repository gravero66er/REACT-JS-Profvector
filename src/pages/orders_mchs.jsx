import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../components/Modal/modal";

export default function Orders() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <motion.div
      className="container"
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
            Наши сотрудники разработают необходимый комплект документов по
            организации противопожарного режима. Вам остаётся ознакомить под
            роспись ответственных лиц и персонал организации.
            <br />
            <br />
            <div className="page__subtitle">Пожарная безопасность</div>
            Необходимые документы по пожарной безопасности:
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
              <li className="page__item">- и другие документы.</li>
            </ul>
          </div>
          <div className="page__subtitle">Электробезопасность</div>
          <div className="page__content">
            Необходимые документы по электробезопасности:
            <ul className="page__list">
              <li className="page__item">
                - приказ о назначении ответственного за электрохозяйство;
              </li>
              <li className="page__item">
                - приказ о назначении ответственного за проведение обучения с
                последующим присвоением группы I по электробезопасности для
                неэлектротехнического персонала;
              </li>
              <li className="page__item">
                - перечень должностей и профессий электротехнического и
                электротехнологического персонала, которым необходимо иметь
                соответствующую группу по электробезопасности;
              </li>
              <li className="page__item">
                - перечень должностей и профессий, требующих присвоения
                персоналу группы I по электробезопасности;
              </li>
              <li className="page__item">
                - журнал учета присвоения группы I по электробезопасности
                неэлектротехническому персоналу;
              </li>
              <li className="page__item">- и другие документы.</li>
            </ul>
          </div>
          <div className="page__subtitle">МЧС</div>
          <div className="page__content">
            Необходимые документы по ГО и ЧС:
            <ul className="page__list">
              <li className="page__item">
                - приказ о назначении ответственного за проведение мероприятий
                по ГО и ЧС;
              </li>
              <li className="page__item">
                - программа проведения вводного инструктажа по ГО и ЧС;
              </li>
              <li className="page__item">
                - журнал регистрации вводного инструктажа по ГО и ЧС.
              </li>
            </ul>
          </div>
          <div className="page__subtitle"></div>
          <div className="page__content">
            Также наши специалисты оказывают помощь в подготовке к проверкам
            МЧС.
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
        <div className="page__pic page__pic-11"></div>
      </div>
      <Modal active={modalActive} setActive={setModalActive} />
    </motion.div>
  );
}
