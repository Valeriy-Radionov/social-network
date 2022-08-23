import React from "react";
import s from "./ProfileInfo.module.css"
import {ProfileType, updateStatus} from "../../../redux/profileReducer";
import {Preloader} from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

type ProfileInfoType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos?.large}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/> ava + description
            </div>
        </div>
    )
}
export default ProfileInfo