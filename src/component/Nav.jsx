
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFileAlt, faBook, faColumns, faPencilAlt, faCheckCircle, faLifeRing } from '@fortawesome/free-solid-svg-icons';

import './App.css';
import zetylogo from './Images/zetylogo.jpeg';
 

const Navbartemp = () => {
  const [showResumeDropdown, setShowResumeDropdown] = useState(false);
  const [showCvDropdown, setShowCvDropdown] = useState(false);
  return (
    <div className='hero-container'>
      <nav className="navbar">
        <div className="logo">
          <img src={zetylogo} alt="Zety Logo" />
        </div>
        <ul className="nav-links">
          <li onMouseEnter={() => setShowResumeDropdown(true)}
            onMouseLeave={() => setShowResumeDropdown(false)}>
            <a href="#resume-builder">Resume</a>
            {showResumeDropdown && (
              <div className="dropdown-content">
                <div className="builder">
                  <FontAwesomeIcon icon={faFileAlt} className="icon-large" />
                 <link to="ResumeBuilder"> <div className='title'>
                    <a href="#" className="dropdown-title">Resume Builder</a>
                    <p>Create a resume in 5 minutes. Get the job you want.</p>
                  </div></link>
                </div>
                <ul className="dropdown-list">
                  <li>
                    <FontAwesomeIcon icon={faFileAlt} className="icon" />
                    <link to="ResumeTemplates" ><div>
                      <a href="#resume-templates">Resume Templates</a>
                      <p>Find the perfect resume template.</p>
                    </div></link>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faBook} className="icon" />
                    <div>
                      <a href="#resume-examples">Resume Examples</a>
                      <p>See perfect resume samples that get jobs.</p>
                    </div>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faColumns} className="icon" />
                    <div>
                      <a href="#resume-format">Resume Format</a>
                      <p>Pick the right resume format for your situation.</p>
                    </div>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPencilAlt} className="icon" />
                    <div>
                      <a href="#write-resume">How to Write a Resume</a>
                      <p>Learn how to make a resume that gets interviews.</p>
                    </div>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheckCircle} className="icon" />
                    <div>
                      <a href="#resume-checker">Resume Checker</a>
                      <p>Get your resume checked and scored with one click.</p>
                    </div>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faLifeRing} className="icon" />
                    <div>
                      <a href="#resume-help">Resume Help</a>
                      <p>Improve your resume with help from expert guides.</p>
                    </div>
                  </li>
                </ul>
                <button className="cta-button">Create Your Resume</button>
              </div>
            )}
          </li>
           
          <li
            onMouseEnter={() => setShowCvDropdown(true)}
            onMouseLeave={() => setShowCvDropdown(false)}
          >
            <a href="#">CV</a>
            {showCvDropdown && (
              <div className="dropdown-content">
                <div className="builder">
                  <FontAwesomeIcon icon={faFileAlt} className="icon-large" />
                  <div>
                    <a href="#" className="dropdown-title">CV Builder</a>
                    <p>Create a CV in 5 minutes. Get the job you want.</p>
                  </div>
                </div>
                <ul className="dropdown-list">
                  <li>
                    <FontAwesomeIcon icon={faFileAlt} className="icon" />
                    <div>
                      <a href="#">CV Templates</a>
                      <p>Find the perfect CV template.</p>
                    </div>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faBook} className="icon" />
                    <div>
                      <a href="#">CV Examples</a>
                      <p>See perfect CV samples that get jobs.</p>
                    </div>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faColumns} className="icon" />
                    <div>
                      <a href="#">CV Format</a>
                      <p>Pick the right format for your situation.</p>
                    </div>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPencilAlt} className="icon" />
                    <div>
                      <a href="#">How to Write a CV</a>
                      <p>Learn how to make a CV that gets interviews.</p>
                    </div>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheckCircle} className="icon" />
                    <div>
                      <a href="#">CV Checker</a>
                      <p>Get your CV checked and scored with one click.</p>
                    </div>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faLifeRing} className="icon" />
                    <div>
                      <a href="#">CV Help</a>
                      <p>Improve your CV with help from expert guides.</p>
                    </div>
                  </li>
                </ul>
                <button className="cta-button">Create Your CV</button>
              </div>
            )}
          </li>

        </ul>



        <div className="my-account">
          <button className="account-button">My Account</button>
        </div>

      </nav>

    </div>

  );
};

export default Navbartemp;
