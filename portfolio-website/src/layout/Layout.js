
import React from "react";
import Menu from "./Menu";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import Projects from "../pages/Projects"

import "./Layout.css";


//Defines the main layout of the application.

function Layout() {
  return (
    <div class = 'primary-bg'>
      <Menu />
      <HomePage />
      <AboutPage />
      <Projects />
      <ContactPage />
    </div>
  );
}

export default Layout;
