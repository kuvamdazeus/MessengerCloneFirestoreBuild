import React, { useState, useEffect } from 'react';
import './Room.css';
import Message from './Message';
import SendMessage from './SendMessage';
import db from './firebase';

function Room() {

    const [username, setUsername] = useState(null);
    const [messages, setMessages] = useState([]);

    const roomId = window.location.href.split("id=")[1];

    useEffect(() => {

        let name = username;
        while (name === null && window.location.href.includes("id=")) {
            name = prompt("Enter your name please")
        }
        setUsername(name);
        console.log("Running username effect !");

    }, [username]);

    useEffect(() => {

        db.collection('rooms').doc(roomId).collection("chats").orderBy("timestamp", "desc")
        .onSnapshot(snapshot => {
            var messageDocs = [];
            snapshot.docs.map( doc => messageDocs.push(doc.data()) );
            setMessages(messageDocs);
        })

    }, []);

    console.log(messages);

    return (
        <div className="room">
            <div className="message_container">

            { messages.map(message => (<Message username={username} message={message} />)) }

            </div>

            <SendMessage name={username} />
        </div>
    );
}

export default Room;
