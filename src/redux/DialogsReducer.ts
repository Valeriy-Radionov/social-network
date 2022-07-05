import {ActionsType, DialogsPage, SendMessageActionType, UpdateNewMessageTextActionType} from "./state";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
const SEND_MESSAGE = "SEND-MESSAGE"

const dialogsReducer = (state: DialogsPage, action: ActionsType) => {
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