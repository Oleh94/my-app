import React from "react";
import s from './../../Navbar.module.css';

const FriendsNavbarItems = (props) => {
    return (
        <div>
            <div className={s.friendsNavbarItemsImg}><p><img src="https://w-hatsapp.ru/wp-content/uploads/2017/05/7-4.png"/></p></div>
            <div className={s.friendsNavbarItemsText}>{props.name}</div>
        </div>
    )
}

export default FriendsNavbarItems;