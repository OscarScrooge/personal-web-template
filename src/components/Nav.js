import React, {useEffect, useState} from 'react';
import '../styles/Nav.css';
import {Link} from "react-router-dom";
import {setLanguage} from "../actions/actions";
import {connect} from 'react-redux';

function Nav(props) {
    const [activate,setActivation] = useState("3");
    const [activateLang,setActivationLan] = useState("EN");
    const [languge,setLang] = useState("EN");

    useEffect(()=>{
        props.dispatch(setLanguage(languge));
    },[]);

    const handleActivation=(tab)=>{
         setActivation(tab);
    };

    const handleLanguage=(language)=>{

          setLang( language ==="EN"?"EN":"SP");
          setActivationLan(language ==="EN"?"EN":"SP");

          props.dispatch(setLanguage(language));
    };

    return (
       <nav className="nav">
           <Link to="/proyects"  onClick={event => handleActivation("1")}>
               <span

                     className={`nav-option  ${activate === "1"? "active": ""}`}
               >
                   Proyects
               </span>
           </Link>
           <Link to="/resume" onClick={event => handleActivation("2")}>
               <span
                     className={`nav-option  ${activate === "2"? "active": ""}`}>Resume</span>
           </Link>
           <Link to="/about" onClick={event => handleActivation("3")}>
               <span
                     className={`nav-option  ${activate === "3"? "active": ""}`}>About me</span>
           </Link>
           <div className="nav-languages">
               <span className={`nav-option-language  ${activateLang==="EN"?"active":""}`} onClick={event => handleLanguage("EN")}>ENG</span>
               <span className={`nav-option-language  ${activateLang==="SP"?"active":""}`} onClick={event => handleLanguage("SP")}>SPA</span>
           </div>
       </nav>
    );
}

export default connect()(Nav);
