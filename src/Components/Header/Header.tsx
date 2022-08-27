import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
}
const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img src="https://cdn.pixabay.com/photo/2018/01/06/07/53/social-3064515_960_720.jpg" alt="image"/>
            <div className={s.loginBlock}>
                {
                    props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>
                }
            </div>
        </header>

    )
}
export default Header