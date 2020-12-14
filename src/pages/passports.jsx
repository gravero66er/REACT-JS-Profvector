import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../components/Modal/modal";

export default function Passports() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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
            паспорта на рабочие места женщин.
            <br />
            ВВ санитарно-гигиеническом паспорте на рабочие места женщин
            указываются вредные и опасные производственные факторы,
            воздействующие на сотрудников. В документе оцениваются условия труда
            и делается вывод об их соответствии санитарным нормам.
          </div>
          <div className="page__subtitle">Требования:</div>
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
      </div>
      <Modal active={modalActive} setActive={setModalActive} />
    </motion.div>
  );
}
