import React from "react";
import s from './Dialogs.module.css';
import DialogItems from "./DialogItem/DialogItems";
import DialogChats from "./DialogChats/DialogsChats";

const Dialogs = (props) => {
    let state = props.state;

    let dialogs = state.dialogsData.map(d => <DialogItems id={d.id} name={d.name}/>);

    let messages = state.messagesData.map(m => <DialogChats message={m.message}/>);

    let addMessage = () => {
        props.onAddMessage();
    }

    let changeMessageText = (element) => {
        let text = element.target.value;
        props.onChangeMessageText(text);
    }

    return (
        <div className={s.dialogsClass}>
            <div className={s.dialogItems}>
                {dialogs}
            </div>
            <div className={s.messages}>
                {messages}
                <div><textarea placeholder={"Enter your message"}
                               onChange={changeMessageText}
                               value={state.newMessageText}
                /></div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;