import React from 'react';
import Nav from "../components/Nav";
import {navEN} from "../Data/EN/NavEN";
import {navESP} from "../Data/ESP/navESP";
import {connect} from 'react-redux';

function ContainerNav(props) {
    const {language} = props;
    return (
        <Nav options={language==="EN"?navEN:navESP}/>
    );
}

const mapStateProps=(state)=>{
  return{
      language: state.language,
  }
};

export default connect(mapStateProps)(ContainerNav);
