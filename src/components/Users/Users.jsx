import React from "react";
import s from './Users.module.css';
import avatar from "../../source/images/avatar.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.usersOnPageCount)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        {
            pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                             onClick={() => {
                                 props.onPageChange(p)
                             }}> {p} </span>
            })}

        {props.usersData.map(u => <div key={u.id}>
            <span>
            <div className={s.h1}>{u.name}</div>
            <div>
                <NavLink to={"/profile/" + u.id}>
            <img src={!u.photos.small? avatar : u.photos.small} className={s.img}/>
            </NavLink>
                </div>
            <div>
        {u.followed
            ? <button onClick={() => {
                debugger
                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                    withCredentials: true,
                    headers: {
                        "API-KEY": "05cf3849-3d5e-483e-bab3-3079ca3cfcf3"
                    }
                })
                    .then(response => {
                        debugger
                        if (response.data.resultCode === 0) {
                            props.unfollow(u.id)
                        }
                    });
            }}>Unfollow</button>
            : <button onClick={() => {
                debugger
                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                    withCredentials: true,
                    headers: {
                        "API-KEY": "05cf3849-3d5e-483e-bab3-3079ca3cfcf3"
                    }
                })
                    .then(response => {
                        debugger
                        if (response.data.resultCode === 0) {
                            props.follow(u.id)
                        }
                    });
            }}>Follow</button>
        }
            </div>
            </span>
                <span>
            <div>
        {"u.location.country"}
            </div>
            <div>
        {"u.location.city"}
            </div>
            </span>
            </div>
        )
        }
    </div>
}

export default Users;