import reducerProfile from "./reducer-profile";
import reducerDialogs from "./reducer-dialogs";
import reducerNavbar from "./reducer-navabar";

let store = {
    _state: {
        profilePage: {
            postData: [
                {message: "нюхай бебру", likesAmount: 15, id: 1},
                {message: "сосай бибу", likesAmount: 20, id: 2},
                {message: "tiazhko", likesAmount: 58999, id: 3},
            ],
            newPostText: "2021"
        },
        dialogsPage: {
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
        },
        navbarPage: {
            friendsData: [
                {id: 1, name: "ya"},
                {id: 2, name: "ty"},
                {id: 3, name: "vin"}
            ]
        }
    },
    _renderEntireTree() {
    },
    getState() {
        return this._state
    },
    callback(observer) {
        this._renderEntireTree = observer;
    },

    dispatch(action) {
        this._state.profilePage = reducerProfile(this._state.profilePage, action);
        this._state.dialogsPage = reducerDialogs(this._state.dialogsPage, action);
        this._state.navbarPage = reducerNavbar();
        this._renderEntireTree(this._state);
    }
}

window.store = store;
export default store;