import React from "react";
import s from './../Navbar.module.css'
import FriendsNavbarItems from "./FriendsNavbarItems/FriendsNavbarItems";


const FriendsNavbar = (props) => {
    let friendnav = props.name.map(f => <FriendsNavbarItems name={f.name}/>)
    return (
        <div className={s.friendsNavbar}>
            <h1>Friends</h1>
            <div className={s.friendsNavbarItems}>{friendnav}</div>
        </div>
    )
}

export default FriendsNavbar;