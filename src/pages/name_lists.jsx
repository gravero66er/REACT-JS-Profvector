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
          <div className="page__content">
            Сотрудники организации проходят медосмотр при поступлении на работу
            и далее с определенной периодичностью. Проводится профилактика
            профессиональных заболеваний, устанавливается пригодность человека к
            работе и условиям работы.
          </div>
          <div className="page__subtitle"></div>
          <div className="page__content">
            Обязательно прохождение медосмотров для работников:
            <ul className="page__list">
              <li className="page__item">- пищевой промышленности;</li>
              <li className="page__item">- общественного питания;</li>
              <li className="page__item">- торговли;</li>
              <li className="page__item">- медицинских организаций;</li>
              <li className="page__item">- детских учреждений;</li>
              <li className="page__item">- водопроводных сооружений;</li>
              <li className="page__item">
                - занятых на тяжелых работах с вредными и (или) опасными
                условиями труда;
              </li>
              <li className="page__item">- и др.</li>
            </ul>
          </div>
          <div className="page__content">
            Перед медосмотром готовятся документы: список контингента
            работников, поименные списки, направления. Список контингента
            разрабатывается один раз и содержит информацию о профессиях, которые
            обязаны проходить медицинские осмотры. Корректировка документа
            происходит при изменениях в организации: ввод новых рабочих мест,
            улучшение условий труда, реорганизация. Поименные списки
            разрабатываются ежегодно.
          </div>
          <div className="page__subtitle"></div>
          <div className="page__content">
            Наши специалисты разработают для Вас данную документацию. Для
            разработки необходимы:
            <ul className="page__list">
              <li className="page__item">
                - реквизиты юр. лица (наименование, юр. адрес, ИНН, ОГРН,
                должность и Ф.И.О. руководителя);
              </li>
              <li className="page__item">- список работников организации;</li>
              <li className="page__item">
                - бланк формы документов, рекомендуемый местным
                Роспотребнадзором или лечебным учреждением;
              </li>
              <li className="page__item">
                - материалы специальной оценки условий труда (при наличии);
              </li>
              <li className="page__item">
                - информация о проводившихся лабораторных исследованиях
                производственных факторов на рабочих местах (при наличии).
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
