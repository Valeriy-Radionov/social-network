import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import {DialogType} from "./DialogItem/DialogItem"
import Message, {MessageType} from "./Message/Message";

export type DialogsStateType = {
    dialogs: DialogType[]
    messages: MessageType[]
}
export type DialogsPropsType = {
    state: DialogsStateType
}
const Dialogs = (props: DialogsPropsType) => {

    let dialogsElement = props.state.dialogs.map((dialog) => {
        return <DialogItem id={dialog.id} name={dialog.name}/>
    })
    let messagesElement = props.state.messages.map((message) => {
        return <Message id={message.id} message={message.message}/>
    })

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs
