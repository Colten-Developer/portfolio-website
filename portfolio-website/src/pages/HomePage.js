
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
                            short discription
                        </p>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default HomePage;
