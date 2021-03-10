import React from "react";
import s from './Post.module.css';

const Post = (props) => {
  return <div className={s.item}>
    <div>
      <img src="https://cs9.pikabu.ru/post_img/2017/01/20/0/1484862472128953340.jpg"></img>
    </div>
    <div>{props.message}</div>
    <div>
    <span>Like!</span> <span class={s.likesAmount}>{props.likesAmount}</span>
    </div>
  </div>
}

export default Post;