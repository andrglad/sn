import style from "./Header.module.css";
import React from 'react';

function Header() {
    return (
        <header className={style.header}>
            <img src='https://e7.pngegg.com/pngimages/939/180/png-clipart-scalable-graphics-computer-icons-illustration-wide-text-logo.png' alt='logo'></img>
        </header>
    );
}

export default Header;