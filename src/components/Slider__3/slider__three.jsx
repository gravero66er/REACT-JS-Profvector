import React, { PureComponent } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import Orders from "../../pages/orders_mchs";
import Review from "../../pages/review";

// Adding arrows for Swiper

class SliderThree extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      page: <Orders />,
    };
  }

  handleOrders = () => {
    this.setState({
      page: <Orders />,
    });
  };
  handleRev = () => {
    this.setState({
      page: <Review />,
    });
  };

  render() {
    SwiperCore.use(Navigation);
    return (
      <div className="container">
        <div id="mchs" className="slider_main__title">
          МЧС
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
              <div className="slider__card" onClick={this.handleOrders}>
                <div className="slider__img slider__img-14"></div>
                <div className="slider__title">ИНСТРУКЦИИ</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider__card" onClick={this.handleRev}>
                <div className="slider__img slider__img-8"></div>
                <div className="slider__title">ПОДГОТОВКА К ПРОВЕРКЕ</div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div> */}
          <div>{this.state.page}</div>
        </div>
      </div>
    );
  }
}

export default SliderThree;
