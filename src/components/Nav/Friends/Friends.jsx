import React from 'react';
import Friend from './Friend/Friend';
import style from './Friends.module.css'


function Friends(props) {
    // let dialogsElements = props.dialogs.users.map((user) => <Dialog name={user.name} id={user.id} />);
    
    let friendsElements = props.friends.friends.map((friend) => <Friend fname={friend.firstName} lname={friend.secondName} />);

    return (
        <div className={style.friendsblock}>
            Friends
            <div className={style.friends}>
                {friendsElements}
            </div>
        </div>
    );
    
}

export default Friends;