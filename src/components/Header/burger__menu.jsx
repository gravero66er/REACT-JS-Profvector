import React, { useState } from 'react';
import styled from 'styled-components'
import HeaderMenu from './header__menu';

const Burger = styled.div`
div {
    
    &:nth-child(1) {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0deg)'}
    }
    &:nth-child(2) {
        transform: ${({ open }) => open ? 'translateX(-100%)' : 'translateX(0)'};
        opacity: ${({ open }) => open ? '0' : '1'}
    }

    &:nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0deg)'}
    }

}
@media (min-width: 1025px) {
    display: none;
}
`

const BurgerMenu = () => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <Burger className="header__burger" open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </Burger>
            <HeaderMenu open={open}/>
        </>
    );
}

export default BurgerMenu;
