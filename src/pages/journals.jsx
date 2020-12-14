import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../components/Modal/modal";

export default function Journals() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="page__wrapper">
        <div className="page">
          <div className="page__title">Журналы для общепита</div>
          <div className="page__lead">
            Стоимость: &nbsp; <span>4 000 p. &nbsp; 2 000 р.</span>{" "}
          </div>
          <div className="page__content">
            Журналы приобретаются один раз и пригодны для постоянного
            использования. Разработаны в соответствии с требованиями санитарных
            правил. Без лишних и непонятных граф.
          </div>
          <div className="page__subtitle"></div>
          <div className="page__content">
            Отправляем полный комплект журналов Вам на электронную почту.
            Распечатываете и пользуетесь. Возможно повторно распечатать в случае
            утери.
          </div>
          <div className="page__subtitle">Список журналов:</div>
          <div className="page__content">
            <ul className="page__list">
              <li className="page__item">
                - журнал учета проверок юридического лица;
              </li>
              <li className="page__item">- журнал аварийных ситуаций;</li>
              <li className="page__item">- журнал здоровья;</li>
              <li className="page__item">
                - журнал осмотра рук на гнойничковые заболевания;
              </li>
              <li className="page__item">- бракеражный журнал;</li>
              <li className="page__item">- санитарный журнал;</li>
              <li className="page__item">
                - температурные листы холодильного оборудования;
              </li>
              <li className="page__item">
                - температурные листы складских помещений;
              </li>
              <li className="page__item">
                - журнал учета включения бактерицидной лампы;
              </li>
              <li className="page__item">
                - журнал учета использования фритюрных жиров;
              </li>
              <li className="page__item">
                - журнал учета кондитерского инвентаря;
              </li>
              <li className="page__item">
                - учет генеральной уборки помещений;
              </li>
              <li className="page__item">
                - журнал бракеража поступающих пищевых продуктов;
              </li>
              <li className="page__item">
                - журнал учета лабораторного контроля;
              </li>
              <li className="page__item">
                - журнал учета результатов медицинских осмотров работников;
              </li>
              <li className="page__item">
                - журнал регистрации претензий, жалоб;
              </li>
              <li className="page__item">
                - журнал разведения дезинфицирующих средств;
              </li>
              <li className="page__item">
                - журнал учета приёма посетителей на производство;
              </li>
              <li className="page__item">
                - журнал регистрации измерения температуры сотрудников;
              </li>
              <li className="page__item">
                - журнал учета дезинфекции и дератизации;
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
