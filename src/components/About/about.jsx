import React from "react";
import { Link } from "react-scroll";

const settings = {
  spy: true,
  smooth: true,
  offset: -20,
  duration: 800
};

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__info">
            <div className="about__title">О компании</div>
            <div className="about__content">
              Компания «ПрофВектор» оказывает консалтинговые услуги
              организациям, которые столкнулись с проверкой со стороны
              госорганов. Став нашим партнёром, вы всегда остаётесь в курсе, что
              конкретно инспектируют в ходе проверки и будете готовы к любым
              вопросам.
              <br />
              <br />
              Наши услуги будут полезны организациям, которые стремятся
              соблюдать законодательство РФ. Работая с нами, вы будете уверены в
              полном соответствии вашего предприятия всем необходимым
              требованиям госорганов.
              <br />
              <br />
              «ПрофВектор» более 6 лет оказывает консультационную помощь в
              области охраны труда, эпидемиологической и пожарной безопасности,
              а также занимается разработкой необходимой документации для
              проверок со стороны Роспотребнадзора (СЭС, ФБУЗ «Центра гигиены и
              эпидемиологии»), МЧС и РОСТРУД (Государственной инспекции труда).
              <br />
              <br />
              Мы поддерживаем постоянную связь с сотрудниками государственных
              организаций, следим за актуальными изменениями в законодательстве
              и передаём эти знания вам, для вашей дальнейшей спокойной и
              плодотворной работы. Мы помогаем предпринимателям сохранить их
              деньги и время.
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="about__square">
        <div className="square__content">
          <div className="square__img" data-aos="fade-left"></div>
          <Link activeClass="active" to="ros" {...settings}>
            <div className="square__button square__button-l">
              <p>Роспотребнадзор</p>
            </div>
          </Link>
          <Link activeClass="active" to="prot" {...settings}>
            <div className="square__button square__button-m">
              <p>Охрана труда</p>
            </div>
          </Link>
          <Link activeClass="active" to="mchs" {...settings}>
            <div className="square__button square__button-s">
              <p>МЧС</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
