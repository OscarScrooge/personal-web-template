import React from 'react';
import '../styles/TechTag.css';

function TechTag({techArray,fontSize}) {
    const defaultFontSize = "15";
    return (
        <div className="tech-tag">
            {
                techArray.map((tech)=>
                    <span
                        style={{fontSize:`${!fontSize ? defaultFontSize:fontSize}px`}}
                        className="tech"
                    >
                       {tech}
                    </span>
                )
            }
        </div>
    );
}

export default TechTag;
