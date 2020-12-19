import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Message.css';

function Message({ username, message }) {

    const [styles, setStyles] = useState({});

    const userCardStyles = {
        width: "100%",
        backgroundColor: "#1E82F6",
        color: "white",
        textAlign: "right"
    };

    const senderCardStyles = {
        width: "100%",
        backgroundColor: "white",
        color: "black"
    };

    useEffect(() => {

        if (message.name == username && styles != null) {
            setStyles(userCardStyles);

        } else {
            setStyles(senderCardStyles);
        
        }

    }, [message])

    return (
        <div className="message">

            <Card style={styles}>
                <CardContent>
                    <Typography color={styles.color} variant="p" component="h6">
                        { message.name }
                    </Typography>
                    <Typography variant="p" component="p">
                        { message.text }
                    </Typography>
                </CardContent>
            </Card>

            <br />

        </div>
    );
}

export default Message;
