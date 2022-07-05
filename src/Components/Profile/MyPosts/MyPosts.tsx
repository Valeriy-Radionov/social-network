import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css";
import Post, {PropsType} from "./Post/Post";
import {
    ActionsType,
} from "../../../redux/state";
import {
    addPostActionCreator,
    updateNewPostTextActionCreator
} from "../../../redux/ProfileReducer"


export type MyPostsState = {
    posts: PropsType[]
    newPostText: string
    dispatch: (action: ActionsType) => void
}

const MyPosts = (props: MyPostsState) => {

    let postsElements = props.posts.map((post) => {
        return (
            <Post key={post.id} message={post.message} likesCount={post.likesCount} id={post.id}/>
        )
    })
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
        let text = newPostElement.current?.value
        if (text) {
            props.dispatch(addPostActionCreator())
        }
    }
    const onPostChange = () => {
        let text = newPostElement.current?.value
        if (text) {
            props.dispatch(updateNewPostTextActionCreator(text))
        }
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/></div>
                <div>
                    <button onClick={addPost}>Add post
                    </button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )

}
export default MyPosts