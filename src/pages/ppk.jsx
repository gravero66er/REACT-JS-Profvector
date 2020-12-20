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
            (с графиком отбора проб, смывов с окружающей среды, физических
            факторов и т.п.)
            <br />
            Обследование организации на соблюдение санитарного законодательства.
            <br />
            Стоимость: &nbsp; <span>15 000 р. &nbsp; 12 000 р.</span> <br />
            Срок: 2 — 5 дней.
          </div>
          <div className="page__content">
            ППК разрабатывают юр. лица и индивидуальные предприниматели до
            начала осуществления деятельности. Программа производственного
            контроля не имеет ограничения срока действия. Необходимо только
            вовремя вносить изменения:
            <ul className="page__list">
              <li className="page__item">
                - если произошли изменения в действующем санитарном
                законодательстве;
              </li>
              <li className="page__item">
                - если происходят изменения в работе предприятия (изменение
                технологии производства, изменение штатной структуры, изменение
                ассортимента продукции), влияющие на
                санитарно-эпидемиологическую обстановку.
              </li>
            </ul>
          </div>
          <div className="page__subtitle">Кому необходимо?</div>
          <div className="page__content">
            <ul className="page__list">
              <li className="page__item">- предприятиям торговли;</li>
              <li className="page__item">
                - предприятиям общественного питания;
              </li>
              <li className="page__item">- медицинским учреждениям;</li>
              <li className="page__item">- детским садам, школам;</li>
              <li className="page__item">
                - предприятиям гостиничного бизнеса;
              </li>
              <li className="page__item">
                - парикмахерским и салонам красоты;
              </li>
              <li className="page__item">- аптекам;</li>
              <li className="page__item">- производствам;</li>
              <li className="page__item">- и т.д.</li>
            </ul>
          </div>
          <div className="page__subtitle">Для чего ППК?</div>
          <div className="page__content">
            Согласно ППК проводятся лабораторные и инструментальные испытания,
            осуществляется дератизацию и дезинсекцию, проводятся медосмотры
            персонала.
            <br />
            ППК обязательный пункт при проведении проверки Роспотребнадзора. За
            отсутствие программы составляется протокол об административном
            правонарушении.
          </div>
          <div className="page__infograph"></div>
          <div className="page__content">
            Наши сотрудники разработают для Вас индивидуальную программу
            производственного контроля и ответят на вопросы.
          </div>
          <div className="page__subtitle">Для разработки ППК потребуется:</div>
          <div className="page__content">
            <ul className="page__list">
              <li className="page__item">- требования к размещению;</li>
              <li className="page__item">- карточка предприятия;</li>
              <li className="page__item">- ассортиментный перечень;</li>
              <li className="page__item">- штатное расписание;</li>
              <li className="page__item">
                - список производственного оборудования.
              </li>
            </ul>
            <br />
            Стоимость рассчитывается от штата компании, площади, сложности тех.
            процесса.
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
