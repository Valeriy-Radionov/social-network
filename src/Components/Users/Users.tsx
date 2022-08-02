import React from "react";
import s from "./users.module.css";
import userPhoto from "../../assets/images/default avatar.png";
import {UsersType} from "../../redux/UsersReducer";

type UsersPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    usersPage: UsersType
    totalUsersCount: number
    currentPage: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
}
export const Users = (props: UsersPropsType) => {

    let pagesCount: number = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages: number[] = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span key={p} className={props.currentPage === p ? s.selectedPage : ""}
                                 onClick={() => props.onPageChanged(p)}>{p}</span>
                })}

            </div>
            {props.usersPage.users.map(user => {
                return (
                    <div key={user.id}>
                        {/*avatar + button*/}
                        <span>
                            <div><img className={s.userPhoto}
                                      src={user.photos.small != null ? user.photos.small : userPhoto}/></div>
                            <div>
                                {user.followed ? <button onClick={() => {
                                        props.unfollow(user.id)
                                    }}>Unfollow</button> :
                                    <button onClick={() => {
                                        props.follow(user.id)
                                    }}>Follow</button>}
                            </div>
                        </span>
                        <span>
                            {/*Name + status*/}
                            <span>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                            </span>
                            <span>
                                <div>{"user.location.country"}</div>
                                <div>{"user.location.city"}</div>
                            </span>
                        </span>
                    </div>
                )
            })}
        </div>
    )
}