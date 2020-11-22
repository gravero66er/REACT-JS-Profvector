import React, { useState } from "react";
import Modal from "../components/Modal/modal";

export default function Passports() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className="container">
      <div className="page__wrapper">
        <div className="page">
          <div className="page__title">Санитарно-гигиенические паспорта</div>
          <div className="page__lead">
            Стоимость: &nbsp; <span>1 500 p. &nbsp; 1 000 р.</span>
            <br />
            Срок: от 3 дней.
          </div>
          <div className="page__subtitle"></div>
          <div className="page__content">
            Компния «ПрофВектор» разработает для Вас санитарно-гигиенические
            паспорта на рабочие места женщин и водителей.
            <br />В санитарно-гигиеническом паспорте на рабочие места женщин
            указываются вредные и опасные производственные факторы,
            воздействующие на сотрудников. В документе оцениваются условия труда
            и делается вывод об их соответствии санитарным нормам.
          </div>
          <div className="page__subtitle">Требования:</div>
          <div className="page__content">
            В санитарно-гигиеническом паспорте на рабочее место водителя
            указываются требования к:
            <ul className="page__list">
              <li className="page__item">
                - содержанию вредных химических веществ в воздухе рабочей зоны;
              </li>
              <li className="page__item">- микроклимату в кабине;</li>
              <li className="page__item">- освещенности;</li>
              <li className="page__item">- вибрации;</li>
              <li className="page__item">- шуму.</li>
            </ul>
          </div>
          <div className="page__subtitle"></div>
          <div className="page__content">
            Наличие санитарно-гигиенических паспортов является требованием
            законодательства. За отсутствие этих документов предусмотрены
            штрафные санкции. Согласовывать данные документы с надзорными
            органами не нужно.
            <br />
            Мы работаем с предприятиями любых отраслей. Разработаем быстрее и
            дешевле, чем сотрудники госорганов.
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
        <div className="page__pic page__pic-7"></div>
      </div>
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  );
}
