import React from "react";
import s from "./ProfileInfo.module.css"

type ProfileInfoType = {}

const ProfileInfo = (props: ProfileInfoType) => {
    return (
        <div>
            <div>
                <img
                    src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}
export default ProfileInfo