import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import Resume from "../components/Resume";
import {resumeEN} from "../Data/EN/ResumeEN";
import {resumeESP} from "../Data/ESP/ResumeESP";

function ContainerResume(props) {
    const {language} = props;

    return (
        <Resume resume={language==="EN"?resumeEN:resumeESP}/>
    );
}

const mapStateProps = (state)=>{

    return {
        language:state.language,
    }
};

export default connect(mapStateProps)(ContainerResume);
