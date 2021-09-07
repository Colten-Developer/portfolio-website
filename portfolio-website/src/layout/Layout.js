
import React from "react";
import Menu from "./Menu";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";

import "./Layout.css";


//Defines the main layout of the application.

function Layout() {
  return (
    <div>
      <div>
        <div>
          <div>
            <Menu />
          </div>
          <div>
              <HomePage />
          </div>
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
