import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../components/Modal/modal";

export default function Instruction() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="page__wrapper">
        <div className="page">
          <div className="page__title">Инструкции для общепита</div>
          <div className="page__lead">
            Разработка в соответствии с требованиями санитарных правил. <br />
            Срок: 1 день. <br />
            Стоимость: 2 000 р.
          </div>
          <div className="page__subtitle">Список инструкций:</div>
          <div className="page__content">
            <ul className="page__list">
              <li className="page__item">- инструкция по мытью рук;</li>
              <li className="page__item">- обработка яиц;</li>
              <li className="page__item">- обработка овощей и зелени;</li>
              <li className="page__item">- мытье столовой посуды;</li>
              <li className="page__item">- мытье кухонного инвентаря;</li>
              <li className="page__item">
                - сними санитарную одежду (перед туалетом);
              </li>
              <li className="page__item">
                - инструкция по приготовлению рабочих растворов;
              </li>
              <li className="page__item">
                - обработка холодильного оборудования;
              </li>
              <li className="page__item">- обработка щеток и ветоши;</li>
              <li className="page__item">
                - правила текущей/генеральной уборки;
              </li>
              <li className="page__item">- обработка уборочного инвентаря;</li>
              <li className="page__item">
                - обработка емкостей для пищевых отходов;
              </li>
              <li className="page__item">- правила приёмки товара;</li>
              <li className="page__item">
                - мытьё и обработка оборотной тары;
              </li>
              <li className="page__item">- правила личной гигиены.</li>
            </ul>
          </div>
          <div className="page__subtitle">В результате:</div>
          <div className="page__content">
            <ul className="page__list">
              <li className="page__item">
                - полный комплект инструкций в электронном или бумажном виде;
              </li>
              <li className="page__item">
                - консультация по правильному размещению;
              </li>
              <li className="page__item">
                - возможность дополнительно разработать необходимые инструкции.
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
