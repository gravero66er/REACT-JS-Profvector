import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../components/Modal/modal";

export default function OrdersRos() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="page__wrapper">
        <div className="page">
          <div className="page__title">
            Приказы, инструкции, журналы (Роструд)
          </div>
          <div className="page__lead">
            Стоимость зависит от количества необходимых документов
            <br />
            Срок: от 1 дня
          </div>
          <div className="page__subtitle"></div>
          <div className="page__content">
            Разработаем локально - нормативные акты для Вашей организации:
            <br />
            <br />
            <div className="page__subtitle"></div>
            <ul className="page__list">
              <li className="page__item">
                - положение о службе охраны труда (при численности работников
                организации более 50 человек) или Приказ о возложении
                обязанностей специалиста по охране труда на одного из
                специалистов организации (при численности работников организации
                50 человек и менее);
              </li>
              <li className="page__item">
                - приказ о создании постоянно действующей комиссии по проверке
                знаний требований охраны труда;
              </li>
              <li className="page__item">
                - приказ об организации обучения по охране труда;
              </li>
              <li className="page__item">
                - программа обучения руководителей и специалистов по охране
                труда;
              </li>
              <li className="page__item">
                - программа обучения работников рабочих профессий по охране
                труда;
              </li>
              <li className="page__item">
                - протоколы проверки знаний требований охраны труда
                руководителей и специалистов;
              </li>
              <li className="page__item">
                - протоколы проверки знаний требований охраны труда работников
                рабочих профессий;
              </li>
              <li className="page__item">
                - удостоверения о проверке знаний требований охраны труда;
              </li>
              <li className="page__item">
                - программа проведения вводного инструктажа по охране труда;
              </li>
              <li className="page__item">
                - журнал регистрации вводного инструктажа по охране труда;
              </li>
              <li className="page__item">
                - приказ об освобождении от прохождения первичного инструктажа
                по охране труда на рабочем месте;
              </li>
              <li className="page__item">
                - программа проведения первичного инструктажа по охране труда на
                рабочем месте;
              </li>
              <li className="page__item">
                - журнал регистрации инструктажа на рабочем месте;
              </li>
              <li className="page__item">
                - приказ об утверждении и введении в действие инструкций по
                охране труда;
              </li>
              <li className="page__item">
                - инструкции по охране труда для работников по
                должностям/профессиям/видам работ;
              </li>
              <li className="page__item">
                - журнал учета выдачи инструкций по охране труда;
              </li>
              <li className="page__item">
                - перечень профессий и должностей работников, проходящих
                стажировку на рабочем месте;
              </li>
              <li className="page__item">
                - распоряжения о назначении лиц, под руководством которых
                проходят стажировку вновь принятые работники;
              </li>
              <li className="page__item">- И другие документы</li>
            </ul>
          </div>
          <div className="page__subtitle"></div>
          <div className="page__content">
            Система управления охраной труда:
            <ul className="page__list">
              <li className="page__item">
                - приказ об утверждении Положения о СУОТ;
              </li>
              <li className="page__item">- положение о СУОТ;</li>
            </ul>
          </div>
          <div className="page__subtitle"></div>
          <div className="page__content">
            Организация медицинских осмотров:
            <ul className="page__list">
              <li className="page__item">
                - список контингента работников, подлежащих прохождению
                предварительного и периодического медицинского осмотра;
              </li>
              <li className="page__item">
                - поименный список работников, подлежащих прохождению
                предварительного и периодического медицинского осмотра;
              </li>
            </ul>
          </div>
          <div className="page__content">
            Организация выдачи средств индивидуальной защиты и смывающих и (или)
            обезвреживающих средств работникам:
            <ul className="page__list">
              <li className="page__item">
                - нормы бесплатной выдачи специальной одежды, специальной обуви
                и других средств индивидуальной защиты работникам;
              </li>
              <li className="page__item">
                - личные карточки учета выдачи СИЗ;
              </li>
              <li className="page__item">
                - нормы бесплатной выдачи смывающих и (или) обезвреживающих
                средств.
              </li>
            </ul>
          </div>
          <div className="page__subtitle"></div>
          <div className="page__content">
            Также наши специалисты оказывают помощь в подготовке к проверкам
            Роструда.
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
