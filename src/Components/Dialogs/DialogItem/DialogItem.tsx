import React from "react";
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

export type DialogType = {
    id: string
    name: string
}

const DialogItem = (props: DialogType) => {
    const path = "/dialogs/" + props.id
    return (
        <div key={props.id} className={`${s.dialogs} ${s.active}`}><NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem