
import React from "react";
import GitHubLogo from '../images/Github.JPG'
import GmailLogo from '../images/Gmail.JPG'
import LinkedinLogo from '../images/Linkedin.JPG'
import './ContactPage.css'


//Defines the main layout of the application.

function ContactPage() {
  return (
      <div class = 'color-contact' id ='Contact'>
          <div>
          <h1>Contact me</h1>
            <div className = 'parent'>
              <div>
              <h3>Best ways to contact me are:</h3>
                <ul className = 'child'>
                    <li><a href="https://linkedin.com/in/colten-ginnis-91197a205" target="_blank">
                        <img src={LinkedinLogo} alt="Linkedin Logo" className = 'logos'></img>
                        </a></li>
                    <li><a href="https://github.com/Colten-Developer" target="_blank">
                        <img src={GitHubLogo} alt="GitHub Logo" className = 'logos'></img>
                        </a></li>
                    <li><a href="mailto: coltyg1@gmail.com">
                        <img src={GmailLogo} alt="Gmail Logo" className = 'logos'></img>
                    </a></li>
                </ul>
              </div>
                <div>
              <h3>Send me an email here:</h3>
              <section>
                  <div>
                      <form action="https://formspree.io/f/mvodpzkd" method = "POST">

                          <label for="username">Name:</label>
                          <input id="username" type="text" name="name" class = 'info'></input>

                            <br></br>

                          <label for="userEmail">Email:</label>
                          <input id="userEmail" type="text" name="email" class= 'info'></input>

                          <br></br>

                          <label for="userMessage">Message:</label>
                          <br></br>
                          <textarea id="userMessage" name="message"></textarea>
                          <br></br>
                          <button type="submit">Submit</button>
                      </form>
                  </div>
              </section>
              </div>
          </div>
          </div>
      </div>
  );
}

export default ContactPage;
