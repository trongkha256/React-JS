import React, { Component } from 'react';
import './header.css'
class Header extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <a href="#">
                        <img className="logo" src="./img/logoicon.png" alt="logo" />
                    </a>
                    <div className="navbar">
                        <a href="#">Home</a>
                        <a href="#">Services</a>
                        <a href="#">Destination</a>
                        <a href="#">Events</a>
                        <a href="#">Gallery</a>
                        <a href="#">Contact us</a>
                    </div>
                </div>

            </div>
        );
    }
}

export default Header;