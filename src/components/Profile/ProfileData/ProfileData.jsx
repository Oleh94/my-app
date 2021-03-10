import React from "react";
import s from './ProfileData.module.css';
import Preloader from "../../Preloader/Preloader";
import avatar from "../../../source/images/avatar.png";


const ProfileData = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={s.profileData}>
            <div className={s.profileImage}>
                <img
                    src="data:image/jpeg;base64,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"/>
            </div>
                <img src={!props.profile.photos.large ? avatar : props.profile.photos.large}/>
            <div className={s.textInformation}>
                <p>
                    {props.profile.aboutMe}
                </p>
            </div>
        </div>
    )
}

export default ProfileData;