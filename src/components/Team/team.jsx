import React from "react";
import { Link } from "react-scroll";

const settings = {
  spy: true,
  smooth: true,
  offset: -20,
  duration: 800
};

const Team = () => {
  return (
    <div className="team__wrapper">
      <div className="container">
        <div className="block__title">
          <div className="line"></div>
          <div className="title">Команда</div>
          <div className="line"></div>
        </div>
        <div className="team__row">
          <div className="team__first">
            <div className="team__item">
              <div className="team__photo team__photo-one"></div>
              <div className="team__name">Копцев Артём</div>
              <div className="team__discr">
                Врач по гигиене питания.
                <br />
                (Общий стаж работы 6 лет)
              </div>
            </div>
            <div className="team__item">
              <div className="team__photo team__photo-two"></div>
              <div className="team__name">Краюшкина Ольга</div>
              <div className="team__discr">
                Врач эпидемиолог.
                <br />
                (Общий стаж работы 6 лет)
              </div>
            </div>
            <div className="team__item">
              <div className="team__photo team__photo-three"></div>
              <div className="team__name">Попов Дмитрий</div>
              <div className="team__discr">
                Врач по охране труда.
                <br />
                (Общий стаж работы 6 лет)
              </div>
            </div>
          </div>
          <div className="team__second">
            <div className="team__item">
              <div className="team__photo team__photo-four"></div>
              <div className="team__name">Федяева Нина</div>
              <div className="team__discr">
                Специалист по охране труда
                <br />
                и пожарной безопасности.
                <br />
                (Общий стаж работы 16 лет)
              </div>
            </div>
            <div className="team__img" data-aos="fade-up"></div>
            <div className="team__item">
              <div className="team__photo team__photo-five"></div>
              <div className="team__name">Сатторова Алина</div>
              <div className="team__discr">Менеджер по работе с клиентами.</div>
            </div>
          </div>
        </div>
        <div className="team__info">
          <div className="team__rules">
            <div className="info__title">Наши принципы</div>
            <div className="info__content">
              Ответственность.
              <br />
              Мы несем ответственность за наш продукт и
              наших клиентов. Понимаем потребности и предоставляем услуги,
              которые приносят результат.
              <br />
              <br />
              Просвещение.
              <br />
              Развиваем клиента и
              повышаем его уровень знаний Российского законодательства.
              <br />
              <br />
              Честность.
              <br />
              Мы дорожим своим именем. Доверие наших клиентов
              является залогом успеха.
            </div>
          </div>
          <div className="team__target">
            <div className="info__title">Наша цель</div>
            <div className="info__content">
              Наша цель помочь Вам разобраться в требованиях госорганов и
              работать без штрафов!
            </div>
          </div>
        </div>
        <div className="team__goals">
          <div className="goal__item goal__item-one" data-aos="fade-up">
            <div className="goal__number">1</div>
            <div className="goal__title">Консультация</div>
            <div className="goal__content">
              Консультация и подбор решений
            </div>
          </div>
          <div className="goal__item goal__item-two" data-aos="fade-up">
            <div className="goal__number">2</div>
            <div className="goal__title">Договор</div>
            <div className="goal__content">
              Заключение официального договора
            </div>
          </div>
          <div className="goal__item goal__item-three" data-aos="fade-up">
            <div className="goal__number">3</div>
            <div className="goal__title">Оплата</div>
            <div className="goal__content">
              Оплата необходимых услуг
            </div>
          </div>
          <div className="goal__item goal__item-four" data-aos="fade-up">
            <div className="goal__number">4</div>
            <div className="goal__title">Документы</div>
            <div className="goal__content">
              Подготовка документов
            </div>
          </div>
          <div className="goal__item goal__item-five" data-aos="fade-up">
            <div className="goal__number">5</div>
            <div className="goal__title">Реализация</div>
            <div className="goal__content">
              Реализация проекта
            </div>
          </div>
        </div>
      </div>
      <Link activeClass="active" to="main" {...settings}>
        <div className="menu__button">
          <p>ГЛАВНОЕ МЕНЮ</p>
        </div>
      </Link>
    </div>
  );
};

export default Team;
