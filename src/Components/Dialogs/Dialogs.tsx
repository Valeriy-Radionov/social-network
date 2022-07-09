import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import {DialogType} from "./DialogItem/DialogItem"
import Message, {MessageType} from "./Message/Message";
import {ActionsType} from "../../redux/redux-store";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/DialogsReducer";

export type DialogsStateType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageBody: string
}
export type DialogsPropsType = {
    state: DialogsStateType
    dispatch: (action: ActionsType) => void

}
const Dialogs = (props: DialogsPropsType) => {

    let dialogsElement = props.state.dialogs.map((dialog) => {
        return <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>
    })
    let messagesElement = props.state.messages.map((message) => {
        return <Message key={message.id} id={message.id} message={message.message}/>
    })
    let newMessageBody = props.state.newMessageBody

    const onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.dispatch(updateNewMessageBodyCreator(body))

    }
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
