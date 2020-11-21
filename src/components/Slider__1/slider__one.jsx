import React from "react";
import Slider from "react-slick";

const SliderOne = () => {
  const settings = {
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          vertical: true,
          verticalSwiping: true,
          slidesToShow: 1,
          autoplaySpeed: 3000,
          speed: 3000,
          cssEase: "linear",
          centerMod: true,
        }

      }]
  }

  return (
    <div id="ros" className="slider__one" >
      <div className="slider_main__title">Роспотребнадзор</div>
      <Slider {...settings}>
        <div className="slider__card">
          <div className="slider__img slider__img-1"></div>
          <div className="slider__title">ХАССП</div>
        </div>

        <div className="slider__card">
          <div className="slider__img slider__img-2"></div>
          <div className="slider__title">ППК</div>
        </div>

        <div className="slider__card">
          <div className="slider__img slider__img-3"></div>
          <div className="slider__title">АУДИТ ПРЕДПРИЯТИЯ</div>
        </div>

        <div className="slider__card">
          <div className="slider__img slider__img-4"></div>
          <div className="slider__title">
            САНИТАРНЫЕ
            <br />
            ПАСПОРТА
          </div>
        </div>

        <div className="slider__card">
          <div className="slider__img slider__img-5"></div>
          <div className="slider__title">ЖУРНАЛЫ</div>
        </div>

        <div className="slider__card">
          <div className="slider__img slider__img-6"></div>
          <div className="slider__title">ИНСТРУКЦИИ</div>
        </div>

        <div className="slider__card">
          <div className="slider__img slider__img-7"></div>
          <div className="slider__title">СТО ЛТУ</div>
        </div>

        <div className="slider__card">
          <div className="slider__img slider__img-8"></div>
          <div className="slider__title">ДЕКЛАРАЦИИ</div>
        </div>

        <div className="slider__card">
          <div className="slider__img slider__img-9"></div>
          <div className="slider__title">ПРОДЛЕНИЕ СРОКОВ <br/>
          ГОДНОСТИ</div>
        </div>

        <div className="slider__card">
          <div className="slider__img slider__img-10"></div>
          <div className="slider__title">ОБУЧЕНИЕ ХАССП</div>
        </div>
      </Slider>
    </div >
  );
};

export default SliderOne;
