import React, { PureComponent } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

import Alcho from '../../pages/alcho';
import Audit from '../../pages/audit';
import Hassp from '../../pages/hassp';
import Journals from '../../pages/journals';
import Law from '../../pages/law';
import Ppk from '../../pages/ppk';
import Sto from '../../pages/sto';
import NameLists from '../../pages/name_lists';
import Instruction from '../../pages/instruction';
import Projects from '../../pages/projects';
import Ready from '../../pages/ready';

class SliderOne extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      page: <Hassp />,
    };
  }

  handlePpk = () => {
    this.setState({
      page: <Ppk />,
    });
  };
  handleHassp = () => {
    this.setState({
      page: <Hassp />,
    });
  };
  handleAudit = () => {
    this.setState({
      page: <Audit />,
    });
  };
  handleJour = () => {
    this.setState({
      page: <Journals />,
    });
  };
  handleInstr = () => {
    this.setState({
      page: <Instruction />,
    });
  };
  handleSto = () => {
    this.setState({
      page: <Sto />,
    });
  };
  handleLaw = () => {
    this.setState({
      page: <Law />,
    });
  };
  handleName = () => {
    this.setState({
      page: <NameLists />,
    });
  };
  handleAlcho = () => {
    this.setState({
      page: <Alcho />,
    });
  };
  handleProg = () => {
    this.setState({
      page: <Projects />,
    });
  };
  handleReady = () => {
    this.setState({
      page: <Ready />,
    });
  };

  render() {
    SwiperCore.use(Navigation);
    return (
      <>
        <div className="container">
          <div id="ros" className="slider_main__title">
            Роспотребнадзор
          </div>
          <div className="slider">
            <Swiper
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              breakpoints={{
                850: {
                  direction: 'vertical',
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
                <div className="slider__card" onClick={this.handleHassp}>
                  <div className="slider__img slider__img-1"></div>
                  <div className="slider__title">ХАССП</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider__card" onClick={this.handlePpk}>
                  <div className="slider__img slider__img-2"></div>
                  <div className="slider__title">
                    ПРОГРАММА ПРОИЗВОД. КОНТРОЛЯ
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider__card" onClick={this.handleAudit}>
                  <div className="slider__img slider__img-3"></div>
                  <div className="slider__title">
                    АУДИТ <br /> ПРЕДПРИЯТИЯ
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider__card" onClick={this.handleJour}>
                  <div className="slider__img slider__img-5"></div>
                  <div className="slider__title">ЖУРНАЛЫ</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider__card" onClick={this.handleInstr}>
                  <div className="slider__img slider__img-15"></div>
                  <div className="slider__title">ИНСТРУКЦИИ</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider__card" onClick={this.handleSto}>
                  <div className="slider__img slider__img-7"></div>
                  <div className="slider__title">СТАНДАРТ ОРГАНИЗАЦИИ</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="slider__card"
                  id="ros2"
                  onClick={this.handleLaw}
                >
                  <div className="slider__img slider__img-8"></div>
                  <div className="slider__title">ЗАЩИТА В СУДЕ</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider__card" onClick={this.handleName}>
                  <div className="slider__img slider__img-6"></div>
                  <div className="slider__title">
                    ПОИМЕННЫЕ <br /> СПИСКИ
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider__card" onClick={this.handleAlcho}>
                  <div className="slider__img slider__img-9"></div>
                  <div className="slider__title">ЛИЦЕНЗИЯ НА АЛКОГОЛЬ</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider__card" onClick={this.handleProg}>
                  <div className="slider__img slider__img-16"></div>
                  <div className="slider__title">ПРОЕКТИРОВАНИЕ</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider__card" onClick={this.handleReady}>
                  <div className="slider__img slider__img-17"></div>
                  <div className="slider__title">СДАЧА ПРОБ</div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
            <div>{this.state.page}</div>
          </div>
        </div>
      </>
    );
  }
}

export default SliderOne;
