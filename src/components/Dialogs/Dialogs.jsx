// import styles from "./Dialogs.module.css";
import React from 'react';
import Dialog from './Dialog/Dialog';
import style from './Dialogs.module.css'
import Message from './Message/Message';
import NewMessage from './NewMessage/NewMessage';

function Dialogs(props) {
    let dialogsElements = props.dialogs.users.map((user) => <Dialog name={user.name} id={user.id} />);
    let messagesElements = props.dialogs.messages.map((messages) => <Message message={messages.message} id={messages.id} />);
    return (
        <div className={style.dialogs}>
            <div className={style.dialogitems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <NewMessage />
            </div>
        </div>
    );
}

export default Dialogs;