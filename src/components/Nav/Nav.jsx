import style from "./Nav.module.css";
import React from 'react';
import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <nav className={style.nav}>
            <div>
                {/* Для подсветки ссылок используется тернарный оператор https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Conditional_Operator */}
                <NavLink to="/myposts" className={({ isActive }) =>(isActive ? style.activeLink : "")}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" className={({ isActive }) =>(isActive ? style.activeLink : "")}>Messages</NavLink>
            </div>
            <div>
                <NavLink to="/news" className={({ isActive }) =>(isActive ? style.activeLink : "")}>News</NavLink>
            </div>
            <div>
                <NavLink to="/music" className={({ isActive }) =>(isActive ? style.activeLink : "")}>Music</NavLink>
            </div>
            <div>
                <NavLink to="/settings" className={({ isActive }) =>(isActive ? style.activeLink : "")}>Settings</NavLink>
            </div>
            <div>
                <NavLink to="*" className={({ isActive }) =>(isActive ? style.activeLink : "")}></NavLink>
            </div>
        </nav>
    );
}

export default Nav;