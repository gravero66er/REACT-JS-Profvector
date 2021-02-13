import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const Menu = styled.div`
  @media (max-width: 1024px) {
    top: ${({ open }) => (open ? "-55px" : "-330px")};
    opacity: ${({ open }) => (open ? "1" : "0")};
  }
`;

const Drop = styled.div`
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(400%)")};
`;

// Styled-components for dropout menu

const settings = {
  spy: true,
  smooth: true,
  offset: -50,
  duration: 800,
};

const HeaderMenu = ({ open }) => {
  const [dropOne, setDropOne] = useState(false);
  return (
    <Menu className="header__menu" open={open}>
      <div className="menu__items">
        <div
          className="menu__item"
          open={dropOne}
          onClick={() => setDropOne(!dropOne)}
        >
          РОСПОТРЕБНАДЗОР
        </div>
        <Link activeсlass="active" to="prot" {...settings}>
          <div className="menu__item">ОХРАНА ТРУДА</div>
        </Link>
        <Link activeсlass="active" to="mchs" {...settings}>
          <div activeсlass="active" className="menu__item">
            МЧС
          </div>
        </Link>
        <Link activeсlass="active" to="blog" {...settings}>
          <div className="menu__item">БЛОГ</div>
        </Link>
      </div>
      <Drop className="drop__menu" open={dropOne}>
        <ul className="drop__list">
          <Link activeсlass="active" to="ros" {...settings}>
            <li className="drop__item">ХАССП</li>
          </Link>
          <Link activeсlass="active" to="ros" {...settings}>
            <li className="drop__item">ППК</li>
          </Link>
          <Link activeсlass="active" to="ros" {...settings}>
            <li className="drop__item">АУДИТ</li>
          </Link>
          <Link activeсlass="active" to="ros" {...settings}>
            <li className="drop__item">САНИТАРНЫЕ ПАСПОРТА</li>
          </Link>
          <Link activeсlass="active" to="ros" {...settings}>
            <li className="drop__item">ЖУРНАЛЫ</li>
          </Link>
          <Link activeсlass="active" to="ros" {...settings}>
            <li className="drop__item">ПОИМЕННЫЕ СПИСКИ</li>
          </Link>
          <Link activeсlass="active" to="ros" {...settings}>
            <li className="drop__item">СТО ЛТУ</li>
          </Link>
          <Link activeсlass="active" to="ros" {...settings}>
            <li className="drop__item">ЗАЩИТА В СУДЕ</li>
          </Link>
          <Link activeсlass="active" to="ros" {...settings}>
            <li className="drop__item">ЛИЦЕНЗИЯ НА АЛКОГОЛЬ</li>
          </Link>
          <Link activeсlass="active" to="ros" {...settings}>
            <li className="drop__item">КАНЦЕРОГЕННООПАСНЫЙ ПАСПОРТ</li>
          </Link>
        </ul>
      </Drop>
    </Menu>
  );
};

export default HeaderMenu;
