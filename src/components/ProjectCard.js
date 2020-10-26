import React from 'react';
import '../styles/ProjectCard.css';

function ProjectCard(props) {
    return (
        <div className="project-card">
            <h3 className="project-title">{props.title}</h3>
            <img className="project-img" src={props.img} alt={props.alt}/>
            <div className="project-description">
                <p>{props.description}</p>
            </div>
            <div className="project-links">
                <span>Url:&nbsp;&nbsp; <a href={props.url} target="_blank">{props.urlAlias}</a></span>
                <span>Code: &nbsp;&nbsp; <a href={props.code} target="_blank">{props.codeAlias}</a></span>
            </div>
            {props?.techs}
        </div>
    );
}

export default ProjectCard;
