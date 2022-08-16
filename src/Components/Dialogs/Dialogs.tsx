import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/dialogsReducer";
import {Redirect} from "react-router-dom";

export type DialogsPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
    dialogsPage: DialogsPageType
    isAuth: boolean
}
const Dialogs = (props: DialogsPropsType) => {
    let state = props.dialogsPage
    let dialogsElement = state.dialogs.map((dialog) => {
        return <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>
    })
    let messagesElement = state.messages.map((message) => {
        return <Message key={message.id} id={message.id} message={message.message}/>
    })
    let newMessageBody = state.newMessageBody

    const onSendMessageClick = () => {
        props.sendMessage()
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.updateNewMessageBody(body)
    }
    if (!props.isAuth) return <Redirect to={"/login"}/>
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div><textarea onChange={onNewMessageChange} value={newMessageBody}
                                   placeholder={"Enter your message"}></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs
