import React, { useState } from "react";
import Modal from "../components/Modal/modal";

export default function Alcho() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className="container">
      <div className="page__wrapper">
        <div className="page">
          <div className="page__title">Лицензия на алкоголь</div>
          <div className="page__lead">
            Стоимость рассчитывается от пакета имеющихся документов <br />
            Срок: 20 — 30 дней
          </div>
          <div className="page__subtitle"></div>
          <div className="page__content">
            Сэкономим Ваше время на получение лицензии. У нас отлаженное
            взаимодействие с госорганами.
          </div>
          <div className="page__subtitle">
            Мы поможем Вам собрать пакет документов:
          </div>
          <div className="page__content">
            <ul className="page__list">
              <li className="page__item">- заявление о выдаче лицензии;</li>
              <li className="page__item">
                - нотариально заверенные копии учредительных документов
                организации;
              </li>
              <li className="page__item">
                - копии свидетельств о госрегистрации заявителя и постановке на
                налоговый учет, заверенные ИФНС, выдавшей оригиналы;
              </li>
              <li className="page__item">
                - копия платежного документа об уплате госпошлины за выдачу
                лицензии;
              </li>
              <li className="page__item">
                - документы, подтверждающие наличие у заявителя уставного
                капитала необходимого размера (справка банка, решение общего
                собрания участников ООО и акт оценки имущества при внесении в УК
                неденежных средств, документ о внесении дополнительных вкладов и
                др.);
              </li>
              <li className="page__item">
                - техпаспорт из БТИ (бюро технической инвентаризации);
              </li>
              <li className="page__item">
                - документы, подтверждающие наличие в собственности или в аренде
                производственных и складских помещений. Срок в договоре аренды
                должен быть не менее одного года. Бессрочный договор будет
                основанием для отказа;
              </li>
              <li className="page__item">- и т.д.;</li>
            </ul>
          </div>
          <div className="page__subtitle"></div>
          <div className="page__content"></div>
          <div className="page__subtitle"></div>
          <div className="page__content">
            Госпошлина за выдачу лицензии на продажу алкоголя оставляет 65 000
            р. за каждый год действия лицензии.
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
        <div className="page__pic page__pic-8"></div>
      </div>
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  );
}
