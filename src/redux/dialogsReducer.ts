import {DialogType} from "../Components/Dialogs/DialogItem/DialogItem";
import {MessageType} from "../Components/Dialogs/Message/Message";
import {v1} from "uuid";

const SEND_MESSAGE = "SEND-MESSAGE"

export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
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
}

const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsActionsType): DialogsPageType => {

    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: v1(), message: body}]
            }
        }
        default:
            return state
    }
}

export type DialogsActionsType = sendMessageCreatorType
type sendMessageCreatorType = ReturnType<typeof sendMessageCreator>

export const sendMessageCreator = (newMessageBody: string) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    } as const
}

export default dialogsReducer