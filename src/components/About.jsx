import React from 'react';
import Navbar from './Navbar';
import "./About.css";

const About = () => {
  let aboutMeDetails = {
    name: "mahesh veeraiah r",
    age: 20,
    dob: "June 6th,2003",
    schooling: "vvmhs High School",
    degree: "Btech IT"
  };

  return (
    <>
      <Navbar />
      <div className='me'>
        {/* About Me Section */}
        <div className='about-me-container'>
          <h2>About Me</h2>
          <div className='about-me-details'>
            <p><strong>Name:</strong> {aboutMeDetails.name}</p>
            <p><strong>Age:</strong> {aboutMeDetails.age}</p>
            <p><strong>DOB:</strong> {aboutMeDetails.dob}</p>
            <p><strong>Schooling:</strong> {aboutMeDetails.schooling}</p>
            <p><strong>Degree:</strong> {aboutMeDetails.degree}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
