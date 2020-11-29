import React from "react";
import Slider from "react-slick";
import { NavLink, Switch, Route, useLocation } from "react-router-dom";
import Alcho from "../../pages/alcho";
import Audit from "../../pages/audit";
import Hassp from "../../pages/hassp";
import Instrum from "../../pages/instrum";
import Journals from "../../pages/journals";
import Law from "../../pages/law";
import Passports from "../../pages/passports";
import Ppk from "../../pages/ppk";
import Sto from "../../pages/sto";
import Kpasssport from "../../pages/k_passport";

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
        },
      },
    ],
  };

  return (
    <>
      <div id="ros" className="slider__one">
        <div className="slider_main__title">Роспотребнадзор</div>
        <Slider {...settings}>
          <NavLink exact to="/">
            <div className="slider__card">
              <div className="slider__img slider__img-1"></div>
              <div className="slider__title">ХАССП</div>
            </div>
          </NavLink>
          <NavLink exact to="/ppk">
            <div className="slider__card">
              <div className="slider__img slider__img-2"></div>
              <div className="slider__title">ППК</div>
            </div>
          </NavLink>
          <NavLink exact to="/audit">
            <div className="slider__card">
              <div className="slider__img slider__img-3"></div>
              <div className="slider__title">АУДИТ ПРЕДПРИЯТИЯ</div>
            </div>
          </NavLink>
          <NavLink exact to="/passports">
            <div className="slider__card">
              <div className="slider__img slider__img-4"></div>
              <div className="slider__title">
                САНИТАРНЫЕ
                <br />
                ПАСПОРТА
              </div>
            </div>
          </NavLink>
          <NavLink exact to="/journals">
            <div className="slider__card">
              <div className="slider__img slider__img-5"></div>
              <div className="slider__title">ЖУРНАЛЫ</div>
            </div>
          </NavLink>
          <NavLink exact to="/">
            <div className="slider__card">
              <div className="slider__img slider__img-6"></div>
              <div className="slider__title">ИНСТРУКЦИИ</div>
            </div>
          </NavLink>
          <NavLink exact to="/sto">
            <div className="slider__card">
              <div className="slider__img slider__img-7"></div>
              <div className="slider__title">СТО ЛТУ</div>
            </div>
          </NavLink>
          <NavLink exact to="/law">
            <div className="slider__card">
              <div className="slider__img slider__img-8"></div>
              <div className="slider__title">ЗАЩИТА В СУДЕ</div>
            </div>
          </NavLink>
          <NavLink exact to="/alcho">
            <div className="slider__card">
              <div className="slider__img slider__img-9"></div>
              <div className="slider__title">
                ЛИЦЕНЗИЯ
                <br />
                НА АЛКОГОЛЬ
              </div>
            </div>
          </NavLink>
          <NavLink exact to="/k_passport">
            <div className="slider__card">
              <div className="slider__img slider__img-10"></div>
              <div className="slider__title">КАНЦЕРОГЕННООПАСНЫЙ ПАСПОРТ</div>
            </div>
          </NavLink>
        </Slider>
      </div>
      <Switch>
        <Route key={"/"} exact path="/" component={Hassp} />
        <Route
          key={"/ppk"}
          exact
          path="/ppk"
          component={Ppk}
        />
        <Route key={"/audit"} exact path="/audit" component={Audit} />
        <Route key={"/passports"} exact path="/passports" component={Passports} />
        <Route key={"/journals"} exact path="/journals" component={Journals} />
        <Route key={"/sto"} exact path="/sto" component={Sto} />
        <Route key={"/law"} exact path="/law" component={Law} />
        <Route key={"/alcho"} exact path="/alcho" component={Alcho} />
        <Route key={"/k_passport"} exact path="/k_passport" component={Kpasssport} />
      </Switch>
    </>
  );
};

export default SliderOne;
