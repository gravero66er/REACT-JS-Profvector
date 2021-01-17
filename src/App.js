import React from "react";
import "./styles/App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
      <Switch>
        <Route component={Singlepost} path="/blog/:slug" />
        <Route className="App" component={Mainpage} path="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
