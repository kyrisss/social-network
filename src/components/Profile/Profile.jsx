import React from "react";
import Banner from "./Banner/Banner";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";

// type PropsType ={

// }

const Profile = (props) => {

        return (
            <div className={s.profile}>
                <Banner profile={props.profile} status={props.status} updateStatus={props.updateStatusTC} setPhoto={props.setPhotoTC} />
                <MyPostsContainer />
            </div>
        )
}

export default Profile;