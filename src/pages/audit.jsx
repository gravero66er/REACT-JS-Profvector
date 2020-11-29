import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../components/Modal/modal";

export default function Audit() {
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
          <div className="page__title">Аудит предприятия</div>
          <div className="page__lead">
            (выездной или дистанционный)
            <br />
            Обследование организации на соблюдение санитарного законодательства.
            <br />
            Стоимость: &nbsp; <span>от 8 000 р. &nbsp; 6 000 р.</span> <br />
            Срок: 1 — 5 дней.
          </div>
          <div className="page__content">
            Санитарные врачи проведут проверку предприятия. Помогаем устранить
            нарушения. <br /> В нашем штате врачи с многолетним стажем по
            специальностям:
            <ul className="page__list">
              <li className="page__item">
                - гигиена питания (аудит кафе, ресторанов, продовольственных
                магазинов и т.д.);
              </li>
              <li className="page__item">
                - гигиена труда (аудит заводов, фабрик, производств и т.д.);
              </li>
              <li className="page__item">
                - эпидемиология (аудит садиков, школ, лпу, стоматологии и т.д.).
              </li>
            </ul>
          </div>
          <div className="page__subtitle">Для кого аудит?</div>
          <div className="page__content">
            <ul className="page__list">
              <li className="page__item">
                - открывающимся и уже работающим предприятиям;
              </li>
              <li className="page__item">
                - организациям стоящим в плане проверок Роспотребнадзора;
              </li>
              <li className="page__item">
                - предприятиям, стремящимся к соблюдению санитарного
                законодательства.
              </li>
            </ul>
          </div>
          <div className="page__subtitle">Зачем нужен аудит?</div>
          <div className="page__content">
            <ul className="page__list">
              <li className="page__item">
                - выявить нарушения на предприятии и начать работу с ними;
              </li>
              <li className="page__item">
                - быстро подготовится к проверке Роспотребнадзора и устранить
                выявленные нарушения;
              </li>
              <li className="page__item">
                - выявив и устранив нарушения, продолжаете работать с
                уверенностью, что Вас не оштрафуют.
              </li>
            </ul>
          </div>
          <div className="page__subtitle">Что проверяется?</div>
          <div className="page__content">
            <ul className="page__list">
              <li className="page__item">- требования к размещению;</li>
              <li className="page__item">
                - требования к водоснабжению и канализации;
              </li>
              <li className="page__item">
                - требования к вентиляции и освещению;
              </li>
              <li className="page__item">
                - требования к вентиляции и освещению;
              </li>
              <li className="page__item">
                - соблюдение поточности технологических процессов;
              </li>
              <li className="page__item">- достаточность цехов;</li>
              <li className="page__item">- отделка помещений;</li>
              <li className="page__item">
                - достаточность оборудования, инвентаря, посуды, тары и т.д.;
              </li>
              <li className="page__item">
                - требования к транспортировке, приему и хранению сырья, пищевых
                продуктов;
              </li>
              <li className="page__item">
                - требования к обработке сырья и производству продукции;
              </li>
              <li className="page__item">
                - условия для соблюдения правил личной гигиены сотрудниками,
                наличие спец. одежды, раздевалок, сан. узлов;
              </li>
              <li className="page__item">
                - условия мойки и дезинфекции оборудования, уборки, хранения
                уборочного инвентаря, моющих и дез. средств;
              </li>
              <li className="page__item">- наличие договоров;</li>
              <li className="page__item">- и т.д.</li>
            </ul>
          </div>
          <div className="page__subtitle">
            Сколько потребуется времени, чтоб выявить нарушения?
          </div>
          <div className="page__content">
            <ul className="page__list">
              <li className="page__item">
                - специалисту хватает 1 — 2 раза посетить Ваше производство.
                Каждый раз не более 4 часов.
              </li>
              <li className="page__item">
                - если оценить документация, то потребуется 1 — 2 дня;
              </li>
              <li className="page__item">
                - по итогу составляется отчет о проведении аудита, на написание
                которого уйдет не более 3 дней.
              </li>
            </ul>
          </div>
          <div className="page__subtitle">Какой результат аудита?</div>
          <div className="page__content">
            <ul className="page__list">
              <li className="page__item">
                - получаете письменный отчет с нарушениями на предприятии и
                рекомендации по устранению;
              </li>
              <li className="page__item">
                - бесплатные консультации по вопросам санитарного
                законодательства в течении одного месяца, после проведения
                аудита;
              </li>
              <li className="page__item">
                - знаете, что Роспотребнадзор будет спрашивать в ходе проверки и
                как нужно с проверяющим общаться;
              </li>
              <li className="page__item">
                - не останется вопросов: «А правильно ли мы это делаем?»;
              </li>
              <li className="page__item">
                - уверенность в своём предприятии, что санитарные нормы
                соблюдаются.
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
        <div className="page__pic page__pic-1"></div>
      </div>
      <Modal active={modalActive} setActive={setModalActive} />
    </motion.div>
  );
}
