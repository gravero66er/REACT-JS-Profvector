import React, { useState } from "react";
import Modal from "../components/Modal/modal";

export default function Hassp() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className="container">
      <div className="page__wrapper">
        <div className="page">
          <div className="page__title">Система ХАССП</div>
          <div className="page__lead">
            Разработка, внедрение, обучение. Для всех регионов России.
            <br />
            Стоимость: &nbsp; <span>60 000 p. &nbsp; 40 000 р.</span>
            <br />
            Срок: от 1 до 4 недель.
          </div>
          <div className="page__subtitle">Для кого?</div>
          <div className="page__content">
            Документ необходим организациям, чья деятельность связана с
            производством пищевой продукции:
            <ul className="page__list">
              <li className="page__item">
                - все предприятия общественного питания (рестораны, кафе,
                столовые, кофейни, кондитерские и т.д.);
              </li>
              <li className="page__item">
                - магазины розничной торговли с собственными цехами для
                приготовления блюд, либо если в магазине имеется производство
                полуфабрикатов;
              </li>
              <li className="page__item">
                - производители алкогольных и безалкогольных напитков;
              </li>
              <li className="page__item">
                - гостиницы, хостелы, отели, турбазы, базы отдыха, на
                территории, которых имеется кухня, для приготовления блюд
                посетителям;
              </li>
              <li className="page__item">
                - кондитерское и хлебопекарное производства;
              </li>
              <li className="page__item">- все заготовочные предприятия;</li>
              <li className="page__item">- и т.д.</li>
            </ul>
          </div>
          <div className="page__subtitle">Требования</div>
          <div className="page__content">
            Разрабатываем и внедряем систему ХАССП в соответствии с
            требованиями:
            <ul className="page__list">
              <li className="page__item">
                - ГОСТ Р 51705.1-2001 (Управление качеством пищевых продуктов на
                основе принципов ХАССП);
              </li>
              <li className="page__item">
                - ИСО 22000:2019 (Система менеджмента безопасности пищевой
                продукции).
              </li>
            </ul>
          </div>
          <div className="page__subtitle">Без штрафов!</div>
          <div className="page__content">
            Чтобы производство находилось под контролем, и проверяющий орган не
            выписывали штраф, мы помогаем Вам:
            <ul className="page__list">
              <li className="page__item">- сформировать группу ХАССП;</li>
              <li className="page__item">- провести анализ рисков;</li>
              <li className="page__item">
                - выявить критические контрольные точки;
              </li>
              <li className="page__item">- описать сырьё и продукцию;</li>
              <li className="page__item">
                - составить блок-схемы на Вашем предприятии;
              </li>
              <li className="page__item">
                - подобрать журналы, которые необходимы и убрать ненужные;
              </li>
              <li className="page__item">- разработать рабочие листы ХАССП;</li>
              <li className="page__item">
                - разработать программы предварительных мероприятий;
              </li>
              <li className="page__item">- и многое другое.</li>
            </ul>
          </div>
          <div className="page__subtitle">Необходимо</div>
          <div className="page__content">
            Для расчета стоимости системы ХАССП необходимо:
            <ul className="page__list">
              <li className="page__item">
                - ассортиментный перечень выпускаемой продукции / меню;
              </li>
              <li className="page__item">- список сотрудников пищеблока;</li>
              <li className="page__item">
                - схема расположения производственных помещений с расположением
                оборудования;
              </li>
              <li className="page__item">
                - список специализированного транспорта;
              </li>
            </ul>
          </div>
          <div className="page__subtitle">Результат</div>
          <div className="page__content">
            В результате вы получаете:
            <ul className="page__list">
              <li className="page__item">
                - выезд специалиста на объект/ либо онлайн консультация;
              </li>
              <li className="page__item">
                - документацию ХАССП именно для Вашего предприятия;
              </li>
              <li className="page__item">
                - обучение персонала, как пользоваться документами;
              </li>
              <li className="page__item">- журналы для ведения записей;</li>
              <li className="page__item">
                - полный контроль над безопасностью вашего производства, что
                приведет к отсутствию жалоб со стороны клиентов;
              </li>
              <li className="page__item">
                - знания, как общаться с контролирующими органами по данному
                вопросу.
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
        <div className="page__pic page__pic-5"></div>
      </div>
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  );
}
