
import React from "react";
import Menu from "./Menu";
import Routes from "./Routes";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";

import "./Layout.css";


//Defines the main layout of the application.

function Layout() {
  return (
    <div className="container-fluid">
      <div className="row h-100">
        <div className="col-md-2 side-bar">
          <Menu />
        </div>
        <br></br>
        <div>
            <HomePage />
        </div>
        <div>
            <AboutPage />
        </div>
        <div>
            <ContactPage />
        </div>
      </div>
    </div>
  );
}

export default Layout;
