import React from "react";
import {addMessageActionCreator, changeMessageTextActionCreator} from "../../redux/reducer-dialogs";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        state: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onAddMessage: () => {dispatch(addMessageActionCreator());
        },
        onChangeMessageText: (text) => {dispatch(changeMessageTextActionCreator(text));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;