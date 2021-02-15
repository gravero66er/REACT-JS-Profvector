import React from "react";
import Header from "../Header/header";
import About from "../About/about";
import Team from "../Team/team";
import SliderTwo from "../Slider__2/slider__two";
import Feedback from "../Feedback/feedback";
import SliderThree from "../Slider__3/slider__three";
import Footer from "../Footer/footer";
import Blog from "../Blog/blog";
import SliderOne from "../Slider__1/slider__one";

function Mainpage() {
  return (
    <>
      <Header />
      <About />
      <SliderOne />
      <SliderTwo />
      <SliderThree />
      <Team />
      <Blog />
      <Feedback />
      <Footer />
    </>
  );
}

export default Mainpage;
