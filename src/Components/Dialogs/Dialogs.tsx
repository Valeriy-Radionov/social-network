import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/dialogsReducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";

export type DialogsPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: (newMessageBody: string) => void
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

    const addNewMessage = (values: FormMessageDataType) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <AddMessageFormCreator onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}


type FormMessageDataType = {
    newMessageBody: string
}

let maxLength50 = maxLengthCreator(50)

export const AddMessageForm: React.FC<InjectedFormProps<FormMessageDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newMessageBody"}
                       placeholder={"Enter your message"} validate={[requiredField, maxLength50]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
export const AddMessageFormCreator = reduxForm<FormMessageDataType>({form: "dialogAddMessageForm"})(AddMessageForm)
export default Dialogs
