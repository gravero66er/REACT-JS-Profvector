import React from "react";
import "./styles/App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Singlepost from "./components/Blog/singlepost";
import Mainpage from "./components/MainPage/mainpage";

AOS.init({
  duration: 500,
});

const App = () => {
  return (
    <BrowserRouter>
      <Route className="App" component={Mainpage} path="/" exact />
      <Route component={Singlepost} path="/:slug" />
    </BrowserRouter>
  );
};

export default App;
