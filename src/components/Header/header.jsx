import React, { useState } from "react";
import Slider from "react-slick";
import NavBar from "./nav__bar";
import SocialLinks from "./social__links";
import Modal from "../Modal/modal";

const Header = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div id="main" className="header__wrapper">
      <NavBar />
      <Slider
        speed={1000}
        slidesToShow={1}
        slidesToScroll={1}
        infinite={true}
        autoplay={true}
        autoplaySpeed={5000}
        arrows={false}
        dots={true}
        responsive={[
          {
            breakpoint: 768,
            settings: {
              dots: false
            }
          }
        ]}
      >
        <div className="header__first-slide">
          <div className="container">
            <div className="header__slide-title">ХАССП</div>
            <div className="header__slide-content">
              Система ХАССП объединила санитарные правила для общепита вместе.
              Журналы, инструкции, описание производства и т.д. При правильной
              работе системы организация выпускает безопасную продукцию. Риск
              отравления отсутствует. Требования Роспотребнадзора соблюдаются.
              Для внедрения системы ХАССП нам потребуется: меню, список
              помещений и оборудования. Документация разрабатывается под Ваше
              производство. Обучим сотрудником работать по системе.
            </div>
          </div>
        </div>
        <div className="header__second-slide">
          <div className="container">
            <div className="header__slide-title">Охрана труда</div>
            <div className="header__slide-content">
              Важным вопросом является охрана труда персонала. Разрабатываем для
              Вашей организации: инструкции, приказы, протоколы, программы.
              Научим заполнять журналы по охране труда. Организуем проведение
              специальной оценки условий труда (СОУТ). Консультационная помощь
              при проверках. Защита Вашей организации.
            </div>
          </div>
        </div>
        <div className="header__third-slide">
          <div className="container">
            <div className="header__slide-title">МЧС</div>
            <div className="header__slide-content">
              Наши сотрудники помогают решить вопросы по пожарной безопасности.
              Ваш объект будет готов к проверке. Осматриваем помещения. Выявляем
              нарушения. Совместно устраняем недостатки. Разрабатываем
              документацию по пожарной безопасности: приказы, инструкции,
              журналы. Даём рекомендации для правильного заполнения. Помощь при
              открытии предприятия и при проверке госоргана.
            </div>
          </div>
        </div>
      </Slider>
      <button className="header__feedback" onClick={() => setModalActive(true)}>
        ОБРАТНАЯ СВЯЗЬ
      </button>
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  );
};

export default Header;
