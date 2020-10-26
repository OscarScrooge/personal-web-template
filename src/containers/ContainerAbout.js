import React, {useEffect, useState} from 'react';
import About from "../components/About";
import {aboutEN} from "../Data/EN/AboutEN";
import {aboutESP} from "../Data/ESP/AboutESP";
import {connect} from "react-redux";

function ContainerAbout(props) {
    const {language} = props;

    return (
        <About about={language==="EN" ? aboutEN:aboutESP}/>
    );
}

const mapStateProps =(state)=>{
    return{
        language:state.language,
    }
};

export default connect(mapStateProps)(ContainerAbout);
