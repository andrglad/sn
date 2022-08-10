import classes from "./Post.module.css";
import React from 'react';

function Post(props) {
    return (
        <div className={classes.post}>
            <div className={classes.postcontent}>
                <img alt="post img" src="https://c.wallhere.com/photos/1e/7d/1600x1200_px_action_adventure_alien_Aliens_Avatar_fantasy_fi-1635355.jpg!d" />
                <p>{props.message}</p>
            </div>
            <div className={classes.rate}>
                <span className={classes.likes}>Likes: {props.likes}</span>
                <span className={classes.like}>Like</span>
                <span className={classes.like}>Dislike</span>
            </div>
        </div>
    );
}

export default Post;