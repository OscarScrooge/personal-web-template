import React from 'react';
import "../styles/About.css";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function About(props) {
    const {about} = props;

    return (
        <div className="about-container">
        <div className="about">
           <img className="about-img" src={about.photo} alt="@OscarScrooge"/>
           <p className="about-greeting">{about.greetings}</p>
           <p className="about-description">{about.description}</p>
           <div className="about-icons">
               <a href="https://github.com/OscarScrooge" target="_blank">
                   <GitHubIcon className="about-icon"/>
               </a>
               <a href="https://www.linkedin.com/in/oscar-s%C3%A1nchez-resume/" target="_blank">
                   <LinkedInIcon className="about-icon"/>
               </a>
           </div>
        </div>
        </div>
    );
}

export default About;
