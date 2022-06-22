import React from "react";
import s from "./Post.module.css";

export type PropsType = {
    id: string
    message: string,
    likesCount: number
}

const Post = (props: PropsType) => {
    return (
        <div key={props.id} className={s.item}>
            <img
                src="https://lastfm.freetls.fastly.net/i/u/770x0/e125c8e510e4f78b466936deb46c88e4.jpg#e125c8e510e4f78b466936deb46c88e4"/>
            {props.message}
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    )

}
export default Post;