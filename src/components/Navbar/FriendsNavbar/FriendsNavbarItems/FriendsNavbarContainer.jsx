import React from "react";
import FriendsNavbar from "../FriendsNavbar";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        name: state.navbarPage.friendsData
    }
}
const FriendsNavbarContainer = connect(mapStateToProps)(FriendsNavbar)

export default FriendsNavbarContainer;