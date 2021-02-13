import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import OrdersRos from "../../pages/orders_ros";
import Review from "../../pages/review";

SwiperCore.use(Navigation);

// Adding arrows for Swiper

const SliderTwo = () => {
  return (
    <div className="container">
      <div id="prot" className="slider_main__title">
        Охрана труда
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
            // 670: {
            //   slidesPerView: 4,
            //   spaceBetween: 5,
            // },
            // 550: {
            //   slidesPerView: 3,
            //   spaceBetween: 20,
            // },
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
                <div className="slider__img slider__img-15"></div>
                <div className="slider__title">ИНСТРУКЦИИ</div>
              </div>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink exact to="/instruction">
              <div className="slider__card">
                <div className="slider__img slider__img-8"></div>
                <div className="slider__title">ПОДГОТОВКА К ПРОВЕРКЕ</div>
              </div>
            </NavLink>
          </SwiperSlide>
        </Swiper>
        {/* <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div> */}
        <div>
          <AnimatePresence>
            <Switch>
              <Route key={"/"} exact path="/" component={OrdersRos} />
              <Route key={"/instruction"} exact path="/instruction" component={Review} />
            </Switch>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default SliderTwo;

// import React from "react";
// import OrdersRos from "../../pages/orders_ros";

// const SliderTwo = () => {
//   return (
//     <div className="container">
//       <div id="prot" className="slider_main__title slider_main__title-two">
//         Охрана труда
//       </div>
//       <div className="slider">
//         <div className="slider__two">
//           <div className="slider__body">
//             {/* <div className="slider__two-card">
//                     <div className="slider__img slider__img-11"></div>
//                     <div className="slider__title">ЖУРНАЛЫ</div>
//                 </div> */}
//             <div className="slider__two-card">
//               <div className="slider__img slider__img-12"></div>
//               <div className="slider__title">ИНСТРУКЦИИ</div>
//             </div>
//             {/* <div className="slider__two-card">
//                     <div className="slider__img slider__img-13"></div>
//                     <div className="slider__title">СОУТ</div>
//                 </div> */}
//           </div>
//         </div>
//         <OrdersRos />
//       </div>
//     </div>
//   );
// };

// export default SliderTwo;
