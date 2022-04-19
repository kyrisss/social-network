import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./Banner.module.css";
import ProfileStatusHook from "./ProfileStatusHook";


const Banner = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    
    const savePhoto = (e) =>{
        const file = e.target.files[0]
        props.setPhoto(file)
    }
    
    return (
        <div className={s.banner}>
            <img className={s.banner_avatar} src={props.profile.photos.small} alt="ava" /><span className={s.banner_name}>{props.profile.fullName}</span>
            <div>
                Change avatar
                <input type="file" onChange={savePhoto}/>
            </div>

            <div className={s.banner_status}>
                <ProfileStatusHook status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    )
}

export default Banner;