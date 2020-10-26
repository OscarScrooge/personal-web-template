import React from 'react';
import ProjectCard from "./ProjectCard";
import '../styles/Projects.css';
import TechTag from "./TechTag";

function Projects(props) {
    const{projects} = props;

    return (
        <div className="projects">
            {
                projects.map((project)=>

                    <ProjectCard
                        title={project.title}
                        img={project.img}
                        description={project.description}
                        url={project.url}
                        code={project.code}
                        urlAlias ={project.urlAlias}
                        codeAlias={project.codeAlias}
                        techs = {<TechTag
                            techArray={project.techsArray}
                            fontSize={"12"}
                        />}
                    />

                )
            }


        </div>
    );
}

export default Projects;
