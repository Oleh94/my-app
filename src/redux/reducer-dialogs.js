const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

let firstState = {
    dialogsData: [
        {id: 1, name: "Oleh"},
        {id: 2, name: "Vikuha"},
        {id: 3, name: "Zabroda"},
        {id: 4, name: "Yarosik"},
        {id: 5, name: "Gleb"},
    ],
    messagesData: [
        {id: 1, message: "Hi"},
        {id: 2, message: "Hello"},
        {id: 3, message: "React"},
        {id: 4, message: "vazhko"},
        {id: 5, message: "duzhe vazhko"},
    ],
    newMessageText: ""
}

const reducerDialogs = (state = firstState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            if (state.newMessageText !== "") { // empty textarea check
                let newMessageText = {
                    id: 6,
                    message: state.newMessageText
                }
                return {
                    ...state,
                    messagesData: [...state.messagesData, newMessageText],
                    newMessageText: ""
                }
            }
        }
        case UPDATE_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type :ADD_MESSAGE});
export const changeMessageTextActionCreator = (text) => ({type : UPDATE_MESSAGE_TEXT, newText : text});

export default reducerDialogs;