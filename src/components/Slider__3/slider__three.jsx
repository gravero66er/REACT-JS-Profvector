import React from "react";
import Orders from "../../pages/orders_mchs";

const SliderThree = () => {
  return (
    <div className="slider">
      <div id="mchs" className="slider__three">
        <div className="slider_main__title slider_main__title-three">МЧС</div>
        <div className="slider__body">
          <div className="slider__three-card">
            <div className="slider__img slider__img-14"></div>
            <div className="slider__title">ИНСТРУКЦИИ</div>
          </div>
        </div>
      </div>
      <Orders />
    </div>
  );
};

export default SliderThree;
