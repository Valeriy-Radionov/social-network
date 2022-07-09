import {ActionsType} from "./redux-store";
import {DialogType} from "../Components/Dialogs/DialogItem/DialogItem";
import {MessageType} from "../Components/Dialogs/Message/Message";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
const SEND_MESSAGE = "SEND-MESSAGE"
export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageBody: string
}
export type UpdateNewMessageTextActionType = {
    type: "UPDATE-NEW-MESSAGE-BODY"
    body: string
}

export type SendMessageActionType = {
    type: "SEND-MESSAGE"
}

let initialState: DialogsPageType = {
    dialogs: [
        {id: "1", name: "Dimych"},
        {id: "2", name: "Andrey"},
        {id: "3", name: "Sveta"},
        {id: "4", name: "Sasha"},
        {id: "5", name: "Victor"},
        {id: "6", name: "Valera"}
    ],
    messages: [
        {id: "1", message: "Hi"},
        {id: "2", message: "How are you?"},
        {id: "3", message: "Yo"},
        {id: "4", message: "Hey"},
        {id: "5", message: "Good day"},
        {id: "6", message: "Hello"}
    ],
    newMessageBody: ""
}
const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ""
            state.messages.push({id: "6", message: body})
            return state
        default:
            return state
    }
}

export const updateNewMessageBodyCreator = (text: string) => {
    const action: UpdateNewMessageTextActionType = {type: "UPDATE-NEW-MESSAGE-BODY", body: text}
    return action
}
export const sendMessageCreator = () => {
    const action: SendMessageActionType = {type: "SEND-MESSAGE"}
    return action
}

export default dialogsReducer