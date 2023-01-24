import React, { useState } from "react";
import Slider from "react-slick";
import NavBar from "./nav__bar";
import Modal from "../Modal/modal";
import { Link } from "react-scroll";

const settings = {
  spy: true,
  smooth: true,
  offset: -50,
  duration: 800,
};

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
              dots: false,
            },
          },
        ]}
      >
        {/* Here we using Slick-slider not Swiper */}

        <div className="header__first-slide">
          <div className="container">
            <Link activeсlass="active" to="ros" {...settings}>
              <div className="header__slide-title">ХАССП</div>
              <div className="header__slide-content">
                Разработка, внедрение системы ХАССП. Обучение.
                <p>
                  <span>Стоимость:</span> 49 т.р.
                </p>
                <p>
                  <span>Срок:</span> от 1 до 4 недель
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="header__second-slide">
          <div className="container">
            <Link activeсlass="active" to="prot" {...settings}>
              <div className="header__slide-title">РОСТРУД</div>
              <div className="header__slide-content">
                Разработка инструкций, приказов, журналов по охране труда.
                Помощь при проверках.
                <p>
                  <span>Стоимость:</span> от 5 т.р.
                </p>
                <p>
                  <span>Срок:</span> от 1 дня
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="header__third-slide">
          <div className="container">
            <Link activeсlass="active" to="mchs" {...settings}>
              <div className="header__slide-title">МЧС</div>
              <div className="header__slide-content">
                Разработка документов по организации противопожарного режима.
                Помощь при проверках. Устранение нарушений.
                <p>
                  <span>Стоимость:</span> от 5 т.р.
                </p>
                <p>
                  <span>Срок:</span> от 1 дня
                </p>
              </div>
            </Link>
          </div>
        </div>
      </Slider>
      <button className="header__feedback" onClick={() => setModalActive(true)}>
        ОСТАВИТЬ ЗАЯВКУ
      </button>
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  );
};

export default Header;
