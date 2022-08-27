import classes from "./MyPosts.module.css";
import React from 'react';
import Post from './Post/Post'

function MyPosts(props) {
      let postList = props.myposts.posts.map((post) => <Post id={post.id} likes={post.likes} message={post.message} />);

    let newPostElement = React.createRef();

    function addPost () {
        // let newPostText = newPostElement.current.value;
        props.addNPost();
    }

    function onPostChange() {
        let newText = newPostElement.current.value;
        props.updateNewPostText(newText);

    }

    return (
        <section className="section">
            <div className={classes.posts}>
                <textarea className={classes.posttext} type="text" placeholder="Enter your post" onChange={onPostChange} ref={newPostElement} value={props.myposts.newPostText} />
                <button className={classes.button} onClick={ addPost }>Add post</button>
                {postList}
            </div>
        </section>
    );
}

export default MyPosts;