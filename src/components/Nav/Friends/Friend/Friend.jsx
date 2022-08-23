import React from "react";
import style from './Friend.module.css'

function Friend(props) {
    return (
        <div className={style.friend}>
            <a className={style.none} href="http://#">
            <img alt='' className={style.ava} src='https://cs6.pikabu.ru/avatars/404/x404070-828004264.png' />
            <div className={style.user}>{props.fname} {props.lname}</div>
            </a>
        </div>
    );
}

export default Friend;