import React from "react";
import {addPostActionCreator, changePostTextActionCreator} from "../../../redux/reducer-profile";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        post: state.profilePage.postData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onAddPost: () => {
            dispatch(addPostActionCreator());
        },
        onChangePostText: (text) => {
            dispatch(changePostTextActionCreator(text));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;