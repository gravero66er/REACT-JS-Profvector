import React from "react";
import BurgerMenu from "./burger__menu";


const NavBar = () => {
    return (
        <div className="container">
            <div className="header__navbar">
                <div className="header__logo">
                </div>
                <BurgerMenu />
                <div className="header__contacts">
                    <a href="tel:+79827494155" className="header__phone">+7 (982) 749 41 55</a>
                    <div className="header__email">
                        <a href="mailto:info@profvector.ru">info@profvector.ru</a>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default NavBar;
