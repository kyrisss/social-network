import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message"
import { Field, reduxForm } from 'redux-form';


const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageText" />
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({form: "DialogsNewMessage"})(AddMessageForm)


const Dialogs = (props) => {

    const showDialogs = props.state.dialogsData.map(el => <DialogItem name={el.user} id={el.id} key={el.id} />)
    const showMessages = props.state.messagesData.map((el, i) => <Message message={el.message} key={i} />)


    const addMessage = (data) => {
        props.addMessage(data.newMessageText)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {showDialogs}
            </div>
            <div className={s.messages}>
                {showMessages}
                <div className={s.new_message}>
                    <AddMessageReduxForm onSubmit={addMessage} />
                </div>
            </div>
        </div>
    )
}

export default Dialogs