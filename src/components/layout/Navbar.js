import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">Eventfy</div>
            <ul className="nav-links">
                <li>
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li>
                    <Link to="/event" className="nav-link">Events</Link>
                </li>
                <li>
                    <Link to="/participant" className="nav-link">Participants</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
