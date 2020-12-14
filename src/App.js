import React from "react";
import "./styles/App.scss";
import { BrowserRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import BlogList from "./components/Blog/blog__list";
import Header from "./components/Header/header";
import About from "./components/About/about";
import SliderOne from "./components/Slider__1/slider__one";
import Team from "./components/Team/team";
import SliderTwo from "./components/Slider__2/slider__two";
import Feedback from "./components/Feedback/feedback";
import SliderThree from "./components/Slider__3/slider__three";
import BlogPlug from "./components/Blog/blog__plug";
import Footer from "./components/Footer/footer";

AOS.init({
  duration: 500,
});

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <About />
        <SliderOne />
        <Team />
        <SliderTwo />
        <Feedback />
        <SliderThree />
        <BlogPlug />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
