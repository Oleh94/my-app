import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendsNavbarContainer from "./FriendsNavbar/FriendsNavbarItems/FriendsNavbarContainer";

const Navbar = (props) => {
    return (
            <nav className={s.nav}>
                <div className={s.item}><NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink></div>
                <div className={s.item}><NavLink to="/messages" activeClassName={s.activeLink}>Messages</NavLink></div>
                <div className={s.item}><NavLink to="/news" activeClassName={s.activeLink}>News</NavLink></div>
                <div className={s.item}><NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink></div>
                <div className={s.item}><NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink></div>
                <div className={s.item}><NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink></div>
                <FriendsNavbarContainer/>
            </nav>
    )
}

export default Navbar;