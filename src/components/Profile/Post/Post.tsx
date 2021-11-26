import React from "react";
import s from './Post.module.css';

type PostPropsType = {
    message: string;
    like: number;
}

function Post(props: PostPropsType) {
    return (
        <div className={s.item}>
            <img src='https://vraki.net/sites/default/files/inline/images/ava-pats-12.jpg'/>
            {props.message}
            <div>like {props.like}</div>
        </div>
    )
}

export default Post;
