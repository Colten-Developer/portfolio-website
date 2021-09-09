import React from "react";

import { Link } from "react-router-dom";

import "./Menu.css"

//Defines the menu for this application.


function Menu() {
    return (
        <div>
            <div class="navbar">
                <p>Colten Ginnis</p>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Projects</a>
                    <a href="#">Contact</a>
            </div>
            <div class="dropdown">
                <button class="dropbtn">Menu</button>
                <div class="dropdown-content">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Projects</a>
                    <a href="#">Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Menu;
