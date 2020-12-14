import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../components/Modal/modal";

export default function Law() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="page__wrapper">
        <div className="page">
          <div className="page__title">Помощь при проверке</div>
          <div className="page__lead">
            Стоимость: &nbsp; <span>15 000 p. &nbsp; 10 000 р.</span>
          </div>
          <div className="page__subtitle"></div>
          <div className="page__content">
            Представляем интересы Вашей организации при проверках
            Роспотребнадзора.
          </div>
          <div className="page__subtitle"></div>
          <div className="page__content">
            Сотрудники «ПрофВектор» - это бывшие сотрудники Роспотребнадзора. Мы
            знаем, что проверяет гос. служащий. Объясним как вести себя во время
            проверки. Поможем избежать больших штрафов. Представляем защиту в
            судах, если Ваше предприятие закрыли.
            <ul className="page__list">
              <li className="page__item">
                - нет необходимого ГОСТа для Вашей продукции;
              </li>
              <li className="page__item">
                - организация увеличивает срок годности выпускаемой продукции;
              </li>
              <li className="page__item">
                - используется новая потребительская упаковка;
              </li>
              <li className="page__item">
                - применяется новая технология изготовления продукции;
              </li>
            </ul>
          </div>
          <div className="page__subtitle"></div>
          <div className="page__content"></div>
          <div className="page__subtitle"></div>
          <div className="page__content">
            Наши специалисты помогают организациям по направлениям:
            <ul className="page__list">
              <li className="page__item">
                - гигиена питания (кафе, рестораны, продовольственные магазины и
                т.д.);
              </li>
              <li className="page__item">
                - гигиена труда (заводы, фабрики, производства и т.д.);
              </li>
              <li className="page__item">
                - эпидемиология (садики, школы, лпу, стоматологии и т.д.)
                краткое описание производства;
              </li>
            </ul>
          </div>
          <div className="page__subtitle">В ходе проверки:</div>
          <div className="page__content">
            <ul className="page__list">
              <li className="page__item">
                - составим сопроводительные письма (ответ на определение об
                истребовании документов);
              </li>
              <li className="page__item">
                - составим заявления на производственный контроль продукции,
                воды, смывов;
              </li>
              <li className="page__item">
                - подготовим документы для рассмотрения дела в Роспотребнадзоре
                или суде;
              </li>
              <li className="page__item">
                - вместе с Вами сходим на получения протокола и напишем
                объяснения;
              </li>
              <li className="page__item">
                - вместе сходим на рассмотрение дела, предоставим защиту;
              </li>
              <li className="page__item">
                - составим ходатайство о замене штрафа на предупреждение;
              </li>
              <li className="page__item">
                - составим ходатайство о снижении штрафа;
              </li>
              <li className="page__item">
                - поможем обжаловать результаты проверки;
              </li>
              <li className="page__item">- и многое другое.</li>
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
