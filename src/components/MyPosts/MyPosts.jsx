import classes from "./MyPosts.module.css";
import React from 'react';
import Post from './Post/Post'

function MyPosts(props) {
    let postList = props.myposts.posts.map((post) => <Post id={post.id} likes={post.likes} message={post.message} />);

    let newPostElement = React.createRef();

    function addPost () {
        let newPostText = newPostElement.current.value;
        alert(newPostText);
    }

    return (
        <section className="section">
            <div className={classes.posts}>
                <textarea className={classes.posttext} type="email" placeholder="Enter your post" ref={newPostElement}></textarea>
                <button className={classes.button} onClick={ addPost }>Add post</button>
                {postList}
            </div>
        </section>
    );
}

export default MyPosts;