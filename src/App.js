import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Route, BrowserRouter as BRouter} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
    return (
        <BRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div class="app-wrapper-content">
                    <Route path="/messages"
                           render={() => <DialogsContainer/>}/>
                    <Route path="/profile/:userId?"
                           render={() => <ProfileContainer/>}/>
                           <Route path="/users"
                           render={() => <UsersContainer/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}></Route>
                </div>
            </div>
        </BRouter>
    );
}

export default App;
