import React from 'react';
import {connect} from 'react-redux';
import Projects from "../components/Projects";
import {projectsEN} from "../Data/EN/ProjectsEN";
import {projectsSPA} from "../Data/ESP/ProjectsSPA";

function ContainerProjects(props) {
    const {language} = props;

    return (
        <Projects projects={language==="EN"? projectsEN:projectsSPA}/>
    );
}

const mapStateProps=(state)=>{

    return{
        language:state.language,
    }
};

export default connect(mapStateProps)(ContainerProjects);
