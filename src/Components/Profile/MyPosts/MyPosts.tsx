import React from "react";
import s from "./MyPosts.module.css";
import Post, {PostPropsType} from "./Post/Post";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

export type MyPostsState = {
    posts: PostPropsType[]
    addPost: (newPostText: string) => void
}

export const MyPosts = (props: MyPostsState) => {

    let postsElements = props.posts.map((post) => {
        return (
            <Post key={post.id} message={post.message} likesCount={post.likesCount} id={post.id}/>
        )
    })

    let onAddPost = (values: FormPostDataType) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export type FormPostDataType = {
    newPostText: string
}

const maxLength10 = maxLengthCreator(10)

export const AddNewPostForm: React.FC<InjectedFormProps<FormPostDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newPostText"} placeholder={"Enter your post"}
                       validate={[requiredField, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
export const AddPostFormRedux = reduxForm<FormPostDataType>({form: "dialogAddMessageForm"})(AddNewPostForm)