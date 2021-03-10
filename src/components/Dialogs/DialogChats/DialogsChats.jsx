import React from "react";
import s from './../Dialogs.module.css';

const DialogChats = (props) => {
    return (
        <div>
            <div className={s.dialogAvatar}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsOSmsnxX6qVqgRW0Ccl2YXG7bikQRhSnYcg&usqp=CAU"/>
            </div>
            <div className={s.message}>{props.message}</div>
        </div>
    )
}

export default DialogChats;