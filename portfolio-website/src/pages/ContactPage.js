
import React from "react";


//Defines the main layout of the application.

function ContactPage() {
  return (
      <div>
          <h1>Contact me</h1>
          <div>
              <p>Best ways to contact me are:</p>
              <ol>
                <li><a href="https://linkedin.com/in/colten-ginnis-91197a205" target="_blank">Linkedin</a></li>
                <li><a href="https://github.com/Colten-Developer" target="_blank">Github</a></li>
                <li><a href="mailto: coltyg1@gmail.com">Gmail</a></li>
              </ol>

              <p>or send me an email here:</p>
              <section>
                  <div>
                      <form action="https://formspree.io/f/mvodpzkd" method = "POST">

                          <label for="username">Name:</label>
                          <input id="username" type="text" name="name"></input>

                          <label for="userEmail">Name:</label>
                          <input id="userEmail" type="text" name="email"></input>

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
  );
}

export default ContactPage;
