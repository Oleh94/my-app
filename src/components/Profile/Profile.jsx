import React from "react";
import ProfileData from "./ProfileData/ProfileData";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return (<div>
        <ProfileData profile={props.profile}/>
        <MyPostsContainer/>
    </div>);
}

export default Profile;