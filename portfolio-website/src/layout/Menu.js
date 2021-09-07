import React from "react";

import { Link } from "react-router-dom";

import "./Menu.css"

//Defines the menu for this application.


function Menu() {
    return (
        <div class="navbar">
            <p>Colten Ginnis</p>
            <a href="default.asp">Home</a>
            <a href="news.asp">News</a>
            <a href="contact.asp">Contact</a>
            <a href="about.asp">About</a>
        </div>
    )
}

export default Menu;
