import React, { useState } from "react";
import { Link } from "react-scroll";
import Modal from '../Modal/modal';

const settings = {
  spy: true,
  smooth: true,
  offset: -20,
  duration: 800
};

const Footer = () => {
  const [modalActive, setModalActive] = useState(false)
  return (
    <div className="footer">
      <div className="footer__feedback">
        <div className="footer__content">
          Мы ценим ваше время, оставьте заявку на обратный звонок.
        </div>
        <button className="footer__button" onClick={() => setModalActive(true)}>
          <p>ОБРАТНАЯ СВЯЗЬ</p>
        </button>
      </div>
      <div className="footer__row">
        <div className="container">
          <div className="footer__wrapper">
            <Link activeClass="active" to="main" {...settings}>
              <div className="footer__menu-button">
                <p>ГЛАВНОЕ МЕНЮ</p>
              </div>
            </Link>
            <div className="social__links-footer">
              <a href="https://www.youtube.com/channel/UCEKQbNGLuQfg2N36sIqOfvw" target="_blank"><div className="links__item links__item-y"></div></a>
              {/* <a href=""><div className="links__item links__item-w"></div></a> */}
              <a href="https://www.facebook.com/profvektor.ru/" target="_blank"><div className="links__item links__item-f"></div></a>
              {/* <a href=""><div className="links__item links__item-t"></div></a> */}
              <a href="https://vk.com/prof_vektor" target="_blank"><div className="links__item links__item-v"></div></a>
              <a href="https://www.instagram.com/artem_profvektor/" target="_blank"><div className="links__item links__item-i"></div></a>
            </div>
            <div className="footer__contacts-block">
              <div className="footer__contacts">
                <div className="footer__phone">+7 (982) 749 41 55</div>
                <div className="footer__email">
                  <a href="mailto:info@profvector.ru">info@profvector.ru</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  );
};

export default Footer;
