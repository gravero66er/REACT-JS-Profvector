import React from "react";
import HeaderMenu from "./header__menu";
import BurgerMenu from "./burger__menu";


const NavBar = () => {
    return (
        <div className="container">
            <div className="header__navbar">
                <div className="header__logo">
                </div>
                <BurgerMenu />
                <div className="header__contacts">
                    <div className="header__phone">+7 (999) 768-98-65</div>
                    <div className="header__email">
                        <a href="mailto:info@profvector.ru">info@profvector.ru</a>
                    </div>
                </div>
                <div className="contact__label"></div>
            </div>
            <div></div>
        </div>
    );
};

export default NavBar;
