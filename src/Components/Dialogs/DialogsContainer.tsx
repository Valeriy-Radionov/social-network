import React from "react";
import {storeType, store, ActionsType} from "../../redux/redux-store";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";

export type DialogsPropsType = {
    // state: DialogsStateType
    store: storeType
    dispatch: (action: ActionsType) => void
}
const DialogsContainer = (props: DialogsPropsType) => {
    let state = props.store.dialogsPage
    // let dialogsElement = state.dialogs.map((dialog) => {
    //     return <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>
    // })
    // let messagesElement = state.messages.map((message) => {
    //     return <Message key={message.id} id={message.id} message={message.message}/>
    // })
    // let newMessageBody = state.newMessageBody

    const onSendMessageClick = () => {

        store.dispatch(sendMessageCreator())
    }
    const onNewMessageChange = (body: string) => {
        props.dispatch(updateNewMessageBodyCreator(body))

    }
    return (
        <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>
    )
}

export default DialogsContainer
