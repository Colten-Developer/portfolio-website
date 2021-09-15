import React from "react";

import { Link } from "react-router-dom";

import "./Menu.css"

//Defines the menu for this application.


function Menu() {
    return (
        <div>
            <div class="navbar">
                <p>Colten Ginnis</p>
                    <a href="#Contact">Contact</a>
                    <a href="#Projects">Projects</a>
                    <a href="#About">About</a>
                    <a href="#Home">Home</a>
            </div>
            <div class="dropdown">
                <button class="dropbtn">Menu</button>
                <div class="dropdown-content">
                    <a href="#Home">Home</a>
                    <a href="#About">About</a>
                    <a href="#Projects">Projects</a>
                    <a href="#Contact">Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Menu;
