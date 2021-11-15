import React from 'react';
import airbnb from '../images/airbnb.png';
import '../styles.css';

export default function Navbar() {
    return (
        <nav className="airnav">
            <img src={airbnb} alt=""  />
        </nav>
    )
}