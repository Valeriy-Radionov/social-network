import React from "react";
import s from "./ProfileInfo.module.css"
import {ProfileType} from "../../../redux/profileReducer";
import {Preloader} from "../../common/Preloader/Preloader";

type ProfileInfoType = {
    profile: ProfileType
}

const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img
                    src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos?.large}/>
                ava + description
            </div>
        </div>
    )
}
export default ProfileInfo