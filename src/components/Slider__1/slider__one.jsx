import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import Alcho from "../../pages/alcho";
import Audit from "../../pages/audit";
import Hassp from "../../pages/hassp";
import Journals from "../../pages/journals";
import Law from "../../pages/law";
import Ppk from "../../pages/ppk";
import Sto from "../../pages/sto";
import Kpasssport from "../../pages/k_passport";
import NameLists from "../../pages/name_lists";
import Instruction from "../../pages/instruction";
import Projects from "../../pages/projects";
import Ready from "../../pages/ready";

SwiperCore.use(Navigation);

// Adding arrows for Swiper

const SliderOne = () => {
  return (
    <div className="container">
      <div id="ros" className="slider_main__title">
        Роспотребнадзор
      </div>
      <div className="slider">
        <Swiper
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            850: {
              direction: "vertical",
              slidesPerView: 11,
              spaceBetween: 15,
              autoplay: false,
            },
            670: {
              slidesPerView: 4,
              spaceBetween: 5,
            },
            550: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            320: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="slider__one"
        >
          <SwiperSlide>
            <NavLink exact to="/">
              <div className="slider__card">
                <div className="slider__img slider__img-1"></div>
                <div className="slider__title">ХАССП</div>
              </div>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink exact to="/ppk">
              <div className="slider__card">
                <div className="slider__img slider__img-2"></div>
                <div className="slider__title">
                  ПРОГРАММА ПРОИЗВОД. КОНТРОЛЯ
                </div>
              </div>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink exact to="/audit">
              <div className="slider__card">
                <div className="slider__img slider__img-3"></div>
                <div className="slider__title">
                  АУДИТ <br /> ПРЕДПРИЯТИЯ
                </div>
              </div>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink exact to="/journals">
              <div className="slider__card">
                <div className="slider__img slider__img-5"></div>
                <div className="slider__title">ЖУРНАЛЫ</div>
              </div>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink exact to="/instruction">
              <div className="slider__card">
                <div className="slider__img slider__img-15"></div>
                <div className="slider__title">ИНСТРУКЦИИ</div>
              </div>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink exact to="/sto">
              <div className="slider__card">
                <div className="slider__img slider__img-7"></div>
                <div className="slider__title">СТАНДАРТ ОРГАНИЗАЦИИ</div>
              </div>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink exact to="/law">
              <div className="slider__card">
                <div className="slider__img slider__img-8"></div>
                <div className="slider__title">ЗАЩИТА В СУДЕ</div>
              </div>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink exact to="/name_lists">
              <div className="slider__card">
                <div className="slider__img slider__img-6"></div>
                <div className="slider__title">
                  ПОИМЕННЫЕ <br /> СПИСКИ
                </div>
              </div>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink exact to="/alcho">
              <div className="slider__card">
                <div className="slider__img slider__img-9"></div>
                <div className="slider__title">ЛИЦЕНЗИЯ НА АЛКОГОЛЬ</div>
              </div>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink exact to="/k_passport">
              <div className="slider__card">
                <div className="slider__img slider__img-10"></div>
                <div className="slider__title">КАНЦ. ПАСПОРТ</div>
              </div>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink exact to="/projects">
              <div className="slider__card">
                <div className="slider__img slider__img-16"></div>
                <div className="slider__title">ПРОЕКТИРОВАНИЕ</div>
              </div>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink exact to="/ready">
              <div className="slider__card">
                <div className="slider__img slider__img-17"></div>
                <div className="slider__title">СДАЧА ПРОБ</div>
              </div>
            </NavLink>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <div>
          <AnimatePresence>
            <Switch>
              <Route key={"/"} exact path="/" component={Hassp} />
              <Route key={"/ppk"} exact path="/ppk" component={Ppk} />
              <Route key={"/audit"} exact path="/audit" component={Audit} />
              <Route
                key={"/instruction"}
                exact
                path="/instruction"
                component={Instruction}
              />
              <Route
                key={"/journals"}
                exact
                path="/journals"
                component={Journals}
              />
              <Route key={"/sto"} exact path="/sto" component={Sto} />
              <Route key={"/law"} exact path="/law" component={Law} />
              <Route key={"/alcho"} exact path="/alcho" component={Alcho} />
              <Route
                key={"/k_passport"}
                exact
                path="/k_passport"
                component={Kpasssport}
              />
              <Route
                key={"/name_lists"}
                exact
                path="/name_lists"
                component={NameLists}
              />
              <Route
                key={"/projects"}
                exact
                path="/projects"
                component={Projects}
              />
              <Route key={"/ready"} exact path="/ready" component={Ready} />
            </Switch>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default SliderOne;
