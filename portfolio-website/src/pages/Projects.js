
import React from "react";
import "./Projects.css"
import construction from "../images/underConstruction.jpg"
import magicRing from "../images/magicRing.jpg"


//Defines the main layout of the application.

function Projects() {
  return (
    <div class = 'project-color'>
        <h1>
            Featured Projects
        </h1>
        <div class = 'project-container'>
            <div class = 'project-item'>
                <h3>Restaurant Reservations</h3>
                <img src = {magicRing} alt = 'under construction'></img>
                <p>description of project</p>
                <a href = 'https://github.com/Colten-Developer/Thinkful_Final_Project'>GitHub Project</a>
                <br></br>
                <a href = 'https://thinkful-final-front-end.vercel.app/dashboard?date=2021-07-20'>Website for project</a>
            </div>
            <div class = 'project-item'>
                <h3>project 2</h3>
                <img src = {construction} alt = 'under construction'></img>
                <p>description of project</p>
                <a href = '#'>GitHub Project</a>
                <br></br>
                <a href = '#'>Website for project</a>
            </div>
            <div class = 'project-item'>
                <h3>project 3</h3>
                <img src = {construction} alt = 'under construction'></img>
                <p>description of project</p>
                <a href = '#'>GitHub Project</a>
                <br></br>
                <a href = '#'>Website for project</a>
            </div>
        </div>
    </div>
  );
}

export default Projects;
