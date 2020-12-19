import React, { useState, useEffect } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import Logo from './Logo.png';
import db from './firebase';

const Nav = (props) => {

    const [id, setId] = useState(0)

    const makeId = () => {
        return Math.round(Math.random() * Math.pow(10, 17))
    }

    useEffect(() => {
        setId(makeId())
    }, [])

    const handleClick = () => {
        setId(makeId())
    }

    return (
        <div className="nav">

            <div className="nav_image">
                <img
                    className="nav_icon"
                    src={Logo}
                    alt = "..."
                />
            </div>

            <div className="nav_opts">
                <p className="nav_text"><Link className="router-link" to="/home">Home</Link></p>
                <p className="nav_text"><Link className="router-link" to="/">Login</Link></p>
                <p className="nav_text"><Link className="router-link" onClick={handleClick} to={`/room/id=${id}`}>Create</Link></p>
            </div>

        </div>
    );
}

export default Nav;