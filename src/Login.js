import './Login.css';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link, Redirect } from 'react-router-dom';
// import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { roomID: "", nextUrl: "" };
    }

    handleUrlInput = (event) => {
        let roomId = event.target.value.split("id=")[1];
        this.setState(
            {
                "input": event.target.value,
                "roomID": roomId,
            }
        )
    }

    handleClick = () => {
        if (this.state.roomID) { this.setState({ ...this.state, nextUrl: `/room/id=${this.state.roomID}` }) }
    }

    render() {
        return (
            <div className="login">

                <div className="login_dialog_image"></div>
                
                <div className="login_dialog">
                    <div className="login_items">
                        <h1 style={{color: "black", marginBottom: "30px"}}>Welcome To Messenger</h1>
                        <TextField value={this.state.input} className="textfield" label="Paste room url" variant="outlined" onChange={ this.handleUrlInput.bind(this) } />
                        <br />
                        <Link className="router-link" to={this.state.nextUrl}>
                            <Button onClick={this.handleClick.bind(this)} style={{width: "100px", height: "40px", marginTop: "20px"}} variant="contained" color="primary">Join</Button>
                        </Link>
                        { this.state.nextUrl ? (<Redirect to={this.state.nextUrl} />) : null}
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;