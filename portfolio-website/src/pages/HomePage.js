
import React from "react";
import headshot from '../images/headshot.jpg'
import "./HomePage.css"


//Defines the main layout of the application.

function HomePage() {
  return (
        <div className = "colors">
            <div>
                <br></br>
                <div className="flex-container">
                    <div className="flex-item-picture">
                        <img src={headshot} alt="picture of colten"></img>
                    </div>
                    <div className="flex-item-paragraph">
                        <p>
                            Howdy everybody, I am
                        </p>
                        <h2>
                            Colten Ginnis
                        </h2>
                        <h3>
                            Software Engineer
                        </h3>
                        <p>
                            Full stack web development is a life long commitment to continuously learn
                            the latest and greatest technology,
                            I love to constantly learn and be pushed to potential. I wish to continue this
                            trend well into my career.
                        </p>
                    </div>
                </div>
            </div>
            <br></br>
        </div>
  );
}

export default HomePage;
