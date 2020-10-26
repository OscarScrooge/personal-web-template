import React from 'react';
import '../styles/Resume.css';
import MailIcon from '@material-ui/icons/Mail';
import GetAppIcon from '@material-ui/icons/GetApp';
import TechTag from "./TechTag";
import resumeFiles from '../files/resume.rar';

function Resume(props) {
    const{resume} = props;

    return (
        <div className="resume-container">
        <div className="resume">
            <div className="resume-header">
            <a className="resume-mail" href = "mailto: mscb.osanchez@gmail.com">
                <MailIcon className="resume-mail-icon"/>
                <p>mscb.osanchez@gmail.com</p>
            </a>
            <a className="resume-download" href={resumeFiles} target="_blank" download="resume.rar">
                <GetAppIcon className="resume-download"/>
                <p>{resume.download_phrase}</p>
            </a>
            </div>
            <h2 className="resume-section">{resume.profile.title}</h2>
            <div className="resume-profile-container">
                <ol className="resume-list">
                    {
                        resume.profile.profile_list.map((desc,key)=>
                            <li key={key}>{desc}</li>
                        )
                    }
                </ol>
            </div>
            <div className="resume-experience">
                <h2 className="resume-section">{resume.work_experience.title}</h2>
                {
                    resume.work_experience.jobs.map((job,key) =>
                        <div className="resume-experience-job">
                            <div className="resume-experience-title">
                                <h4>{job.company}</h4>
                                <h4>{job.year}</h4>
                            </div>
                            <div className="resume-experience-duty">
                                <h5>Position: &nbsp;&nbsp;{job.position}</h5>
                                <ol className="resume-list">
                                    {
                                        job.assigments.map((assigment,key)=>
                                            <li key={key}>{assigment}</li>
                                        )
                                    }
                                </ol>
                            </div>
                        </div>
                    )
                }

            </div>

            <div className="resume-education">
                <h2 className="resume-section">{resume.education.title}</h2>
                <div className="education-grades">
                    <ol className="resume-list">
                        {
                            resume.education.degrees.map((deg,key)=>
                                <li key={key}>{deg}</li>
                            )
                        }
                    </ol>
                </div>
            </div>
            <div className="resume-tools">
                <h2 className="resume-section">{resume.development_tools.title}</h2>
                <div className="resume-tools">
                    <TechTag
                        techArray = {resume.development_tools.techArray}
                        fontSize={"14"}
                    />
                </div>
            </div>
            <h2 className="resume-section">{resume.certifications.title}</h2>
            <div className="resume-certifications">
                <div className="education-grades">
                    <ol className="resume-list">
                        {
                            resume.certifications.certifications_array.map((cert,key)=>
                                <li key={key}>{cert}</li>
                            )
                        }
                    </ol>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Resume;
