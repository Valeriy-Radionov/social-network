import React from "react";
import s from "./MyPosts.module.css";
import Post, {PostPropsType} from "./Post/Post";

export type MyPostsState = {
    posts: PostPropsType[]
    newPostText: string
    addPost: () => void
    updateNewPostText: (text: string) => void
    // dispatch: (action: ActionsType) => void
}

export const MyPosts = (props: MyPostsState) => {

    let postsElements = props.posts.map((post) => {
        return (
            <Post key={post.id} message={post.message} likesCount={post.likesCount} id={post.id}/>
        )
    })
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let onAddPost = () => {
        let text = newPostElement.current?.value
        if (text) {
            props.addPost()
        }
    }
    const onPostChange = () => {
        let text = newPostElement.current?.value

        if (text) {
            // props.dispatch(updateNewPostTextActionCreator(text))
            props.updateNewPostText(text)
        }
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/></div>
                <div>
                    <button onClick={onAddPost}>Add post
                    </button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )

}
