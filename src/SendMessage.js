import React, { useState } from 'react';
import './SendMessage.css';
import TextField from '@material-ui/core/TextField';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import db from './firebase';

function SendMessage({ name }) {

    const [message, setMessage] = useState('');

    const id = window.location.href.split("id=")[1];

    const handleInputChange = (event) => {
        setMessage(event.target.value);

    }

    const handleSend = (event) => {
        event.preventDefault();
        console.log(name, message); // Send post request here

        db.collection("rooms").doc(id).collection("chats")
        .add({
            "name": name,
            "text": message,
            "timestamp": Date.parse(new Date())
        });

        setMessage('');

    }

    return (
        <div className="send_message">
            <TextField value={message} style={{width: "240px", marginLeft: "10px"}} onChange={handleInputChange} label="Type a message" />

            <IconButton>
                <SendIcon onClick={handleSend} fontSize="large" />
            </IconButton>
        </div>
    );
}

export default SendMessage;
