
import React from "react";
import'./AboutPage.css'


//Defines the main layout of the application.

function AboutPage() {
  return (
    <div id = 'About'>
      <div>
          <h1>About me</h1>
          <section>
              <article>
                  <p>
                  Before the pandemic I was an electrical engineering major at Texas A&M university. 
                  At A&M I was a member of the A&M Judo team, even ranking silver in Dallas Invitational National Tournament!
                  When the pandemic came through, I had to leave A&M and my team to return home. 
                  <br></br>
                  <br></br>
                  While at A&M I excelled at my computer science classes.
                  Needing to continue my education I found Thinkful, focusing on software engineering.
                  I am excited about working with a team of people to make an idea become reality.
                  <br></br>
                  <br></br>
                  This has been an amazing process to learn more about computer engineering. I intend to 
                  use my education at Thinkful to become a software engineer, and hopefully start my own
                  software engineering firm. 
                  </p>
                  <p>Learned Technologies:</p>
                  <p>React.js, Javascript, HTML, CSS, Python, Tkinter, Node.js, SQL, PostgresSQL, Express, NPM, Mocha and Chai</p>
                  <p>Upcoming Technologies</p>
                  <p>Wordpress, React Native</p>
              </article>
          </section>
      </div>
    </div>
  );
}

export default AboutPage;
