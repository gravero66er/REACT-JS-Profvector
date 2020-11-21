import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const Menu = styled.div`
  @media (max-width: 1024px) {
    top: ${({ open }) => (open ? "-50px" : "-330px")};
    opacity: ${({ open }) => (open ? "1" : "0")};
  }
`;

const settings = {
  spy: true,
  smooth: true,
  offset: -20,
  duration: 800
};

const HeaderMenu = ({ open }) => {
  return (
    <Menu className="header__menu" open={open}>
      <div className="menu__items">
        <Link activeClass="active" to="ros" {...settings}>
          <div className="menu__item">РОСПОТРЕБНАДЗОР</div>
        </Link>
        <Link activeClass="active" to="prot" {...settings}>
          <div className="menu__item">ОХРАНА ТРУДА</div>
        </Link>
        <Link activeClass="active" to="mchs" {...settings}>
          <div className="menu__item">МЧС</div>
        </Link>
        <Link activeClass="active" to="blog" {...settings}>
          <div className="menu__item">БЛОГ</div>
        </Link>
      </div>
    </Menu>
  );
};

export default HeaderMenu;
