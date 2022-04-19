import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import { Field, reduxForm } from 'redux-form';


const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component="textarea" name="newPostText"/>
            <button>New post</button>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm({form: "profileForm"})(AddNewPostForm)

const MyPosts = (props) => {
    let showPosts = props.profilePage.postsData.map((post, i) => <Post key={i} message={post.post} />);

    const addNewPost = (data) => {
        props.addNewPost(data.newPostText)
    }

    return (
        <div className={s.posts}>
            <AddNewPostReduxForm onSubmit={addNewPost}/>
            {showPosts}
        </div>
    )
}

export default MyPosts