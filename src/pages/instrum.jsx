import React, { useState } from "react";
import Modal from "../components/Modal/modal";

export default function Instrum() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className="container">
      <div className="page__wrapper">
        <div className="page">
          <div className="page__title">Инструкции для общепита</div>
          <div className="page__lead">Стоимость: &nbsp; <span>4 000 p. &nbsp; 2 000 р.</span> </div>
          <div className="page__content">
            Инструкции для удобной работы персонала. Простые и понятные.
            Размещаются на рабочих местах. Даже новый сотрудник без труда в них
            разберётся.
            <br />
            <br />
            Инструкции приобретаются один раз и пригодны для постоянного
            использования. Разработаны в соответствии с требованиями санитарных
            правил. Роспотребнадзор проверяет наличие инструкции на
            производствах. Будьте подготовлены к проверке.
            <br />
            <br />
            Отправляем полный комплект инструкций Вам на электронную почту.
            Распечатываете и пользуетесь. Возможно повторно распечатать в случае
            утери.
          </div>
          <div className="page__subtitle">Обязательные инструкции:</div>
          <div className="page__content">
            <ul className="page__list">
              <li className="page__item">- инструкция по мытью рук;</li>
              <li className="page__item">- обработка яиц;</li>
              <li className="page__item">- обработка овощей и зелени;</li>
              <li className="page__item">- мытье столовой посуды;</li>
              <li className="page__item">- мытье кухонного инвентаря;</li>
              <li className="page__item">
                - сними санитарную одежду (перед туалетом).
              </li>
            </ul>
          </div>
          <div className="page__subtitle">Необходимые в работе:</div>
          <div className="page__content">
            <ul className="page__list">
              <li className="page__item">
                - инструкция по приготовлению рабочих растворов;
              </li>
              <li className="page__item">
                - обработка среднетемпературного холодильного оборудования;
              </li>
              <li className="page__item">
                - обработка низкотемпературного холодильного оборудования;
              </li>
              <li className="page__item">- обработка щеток и ветоши;</li>
              <li className="page__item">- правила текущей уборки;</li>
              <li className="page__item">- правила генеральной уборки;</li>
              <li className="page__item">- обработка уборочного инвентаря;</li>
              <li className="page__item">
                - обработка емкостей для пищевых отходов;
              </li>
              <li className="page__item">- правила приёмки товара;</li>
              <li className="page__item">
                - мытьё и обработка оборотной тары;
              </li>
              <li className="page__item">- сроки хранения полуфабрикатов;</li>
              <li className="page__item">- хранение хлеба;</li>
              <li className="page__item">
                - приготовление 3%-го раствора уксусной кислоты;
              </li>
              <li className="page__item">- правила личной гигиены</li>
              <li className="page__item">
                - обработка кондитерского инвентаря (для кондитерских цехов).
              </li>
            </ul>
          </div>
          <div className="page__subtitle">
            При покупке инструкций можем бесплатно Вам отправить:
          </div>
          <div className="page__content">
            <ul className="page__list">
              <li className="page__item">
                - инструкция по уборка рабочих поверхностей и стен;
              </li>
              <li className="page__item">- обработка досок и ножей;</li>
              <li className="page__item">
                - обработка машины для нарезки овощей;
              </li>
              <li className="page__item">
                - обработка оборудования для раскатки теста;
              </li>
              <li className="page__item">- обработка тестомесильной машины;</li>
              <li className="page__item">- инструкция мытья печи;</li>
              <li className="page__item">- уборка туалета;</li>
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
        <div className="page__pic page__pic-3"></div>
      </div>
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  );
}
