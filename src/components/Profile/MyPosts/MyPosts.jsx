import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postElements = props.post
        .map(p => <Post message={p.message} likesAmount={p.likesAmount}/>
        )

    let newPostElement = React.createRef();

    let addPost = () => {
        props.onAddPost();
    }

    let changePostText = () => {
        let text = newPostElement.current.value;
        props.onChangePostText(text);
    }

    return <div>
        <div className={s.myPosts}>
            <h3>My posts</h3>
        </div>
        <div className={s.textAndButtonArea}>
            <div>
                <textarea ref={newPostElement}
                          onChange={changePostText}
                          value={props.newPostText}
                />
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
        <div>
            {postElements}
        </div>
    </div>
}

export default MyPosts;