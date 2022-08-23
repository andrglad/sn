import React from "react";
import style from './NewMessage.module.css'

function NewMessage () {
    let sendNewMessage = React.createRef();

    function sendMessage () {
        let newMessageText = sendNewMessage.current.value;
        alert(newMessageText)
    }

    return(
        <div className={style.sendnewmessage}>
            <textarea className={style.newmessage} placeholder='Введите новое сообщение...' ref={sendNewMessage}></textarea>
            <button className={style.sendmessage} onClick={sendMessage}>></button>
        </div>
    );
}

export default NewMessage;