import React from "react";
// import { Link } from "react-scroll";

// const settings = {
//   spy: true,
//   smooth: true,
//   offset: -50,
//   duration: 800
// };

// Settings for react-scroll

const About = () => {
  return (
    <div className="about">
      <div className="about__wrapper">
        <div className="about__info">
          <div className="about__title">О компании</div>
          <div className="about__content">
            Оказываем консалтинговые услуги всем, кто столкнулся с проверками со
            стороны Роспотребнадзора, МЧС и РОСТРУДа (Государственной инспекции
            труда):
            <ul>
              <li> • Расшифровка основных правил и системы штрафов;</li>
              <li> • Подготовка алгоритма действий при проверках;</li>
              <li> • Сбор необходимых документов;</li>
              <li> • Отмена штрафов.</li>
            </ul>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default About;
