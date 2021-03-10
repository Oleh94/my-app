import {combineReducers, createStore} from "redux";
import reducerProfile from "./reducer-profile";
import reducerDialogs from "./reducer-dialogs";
import reducerNavbar from "./reducer-navabar";
import reducerUsers from "./reducer-users";
import reducerAuth from "./reducer-auth";

let reducers = combineReducers({
    profilePage: reducerProfile,
    dialogsPage: reducerDialogs,
    navbarPage: reducerNavbar,
    usersPage: reducerUsers,
    reducerAuth: reducerAuth
})

let store = createStore(reducers);

window.store = store;

export default store;