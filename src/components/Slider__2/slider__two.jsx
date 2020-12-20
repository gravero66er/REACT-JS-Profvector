import React from "react";
import OrdersRos from "../../pages/orders_ros";

const SliderOne = () => {
  return (
    <div className="container">
      <div id="prot" className="slider_main__title slider_main__title-two">
        Охрана труда
      </div>
      <div className="slider">
        <div className="slider__two">
          <div className="slider__body">
            {/* <div className="slider__two-card">
                    <div className="slider__img slider__img-11"></div>
                    <div className="slider__title">ЖУРНАЛЫ</div>
                </div> */}
            <div className="slider__two-card">
              <div className="slider__img slider__img-12"></div>
              <div className="slider__title">ИНСТРУКЦИИ</div>
            </div>
            {/* <div className="slider__two-card">
                    <div className="slider__img slider__img-13"></div>
                    <div className="slider__title">СОУТ</div>
                </div> */}
          </div>
        </div>
        <OrdersRos />
      </div>
    </div>
  );
};

export default SliderOne;
