import React from 'react';
import {UsersType, UserType} from "../../redux/UsersReducer";
import s from "./users.module.css"
import axios from "axios";
import userPhoto from "../../../src/assets/images/default avatar.png"

type UsersPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    usersPage: UsersType
}
export const Users = (props: UsersPropsType) => {

    if (props.usersPage.items.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        })
        // props.setUsers(
        //     [
        //         {
        //             id: "1",
        //             followed: false,
        //             fullName: "Valera",
        //             status: "I'm a boss",
        //             photoUrl: "https://android-obzor.com/wp-content/uploads/2022/02/70-2-300x300.jpg",
        //             location: {country: "Belarus", city: "Minsk"}
        //         },
        //         {
        //             id: "2", followed: true,
        //             fullName: "Kirill",
        //             status: "I want to change this world",
        //             photoUrl: "https://android-obzor.com/wp-content/uploads/2022/02/68-7.jpg",
        //             location: {country: "Poland", city: "Krakov"}
        //         },
        //         {
        //             id: "3",
        //             followed: false,
        //             fullName: "Dima",
        //             status: "This is status...",
        //             photoUrl: "https://android-obzor.com/wp-content/uploads/2022/02/68-2-300x300.jpg",
        //             location: {country: "Russia", city: "Moscow"}
        //         },
        //         {
        //             id: "4",
        //             followed: true,
        //             fullName: "Sveta",
        //             status: "Hello my friends",
        //             photoUrl: "https://android-obzor.com/wp-content/uploads/2022/02/34-2-300x300.jpg",
        //             location: {country: "USA", city: "New York"}
        //         }
        //     ]
        // )
    }
    return (
        <div>
            {props.usersPage.items.map(user => {
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
    );
};

