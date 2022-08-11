import React from "react";
import style from './Message.module.css'

function Message(props) {
 
         if (props.id % 2 === 0) {
            //  console.log("Четное");
            return (
                <div className={`${style.messagesection} + + ${style.odd}`}>
                <div className={style.message} >{props.message}</div>
                <img alt="ava" className={style.ava} src="https://a.d-cd.net/1a424f2s-960.jpg" />
                </div>
            );
         }
         else {
            //  console.log("Нечетное")
            return (
                <div className={`${style.messagesection} + + ${style.even}`}>
                <img alt="ava" className={style.ava} src="https://a.d-cd.net/1a424f2s-960.jpg" />
                <div className={style.message}>{props.message}</div>
                </div>
            );
        }
}

export default Message;