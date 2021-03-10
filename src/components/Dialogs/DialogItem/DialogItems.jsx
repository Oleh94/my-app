import React from "react";
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItems = (props) => {
    let path = "/messages/" + props.id;
    return (
        <div className={s.dialogsColumn}>
            <div className={s.userAvatar}>
                <img
                    src="https://i.pinimg.com/474x/54/de/c0/54dec09204a78c8b9ed76459792fd349.jpg"/>
            </div>
            <div className={s.userName} className={s.dialog + " " + s.active}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default DialogItems;