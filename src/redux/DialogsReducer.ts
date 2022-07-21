import {DialogType} from "../Components/Dialogs/DialogItem/DialogItem";
import {MessageType} from "../Components/Dialogs/Message/Message";
import {v1} from "uuid";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
const SEND_MESSAGE = "SEND-MESSAGE"

export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageBody: string
}
// export type UpdateNewMessageTextActionType = {
//     type: "UPDATE-NEW-MESSAGE-BODY"
//     body: string
// }

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

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsDialogsType): DialogsPageType => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.body
            }
        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody
            return {
                ...state,
                newMessageBody: "",
                messages: [...state.messages, {id: v1(), message: body}]
            }
        }
        default:
            return state
    }
}

export type ActionsDialogsType = UpdateNewMessageTextActionType | sendMessageCreatorType
type UpdateNewMessageTextActionType = ReturnType<typeof updateNewMessageBodyCreator>
type sendMessageCreatorType = ReturnType<typeof sendMessageCreator>

export const updateNewMessageBodyCreator = (text: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: text
    } as const
}
export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    } as const
}

export default dialogsReducer