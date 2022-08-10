import React from "react";
import style from "./Dialog.module.css";
import { NavLink } from 'react-router-dom';

function Dialog(props) {
    return (
        <div className={style.dialog}>
            <NavLink to={"/dialogs/" + props.id} className={({ isActive }) => (isActive ? style.activeLink : "")}>{props.name}</NavLink>
        </div>
    );
}

export default Dialog;