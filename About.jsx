import React from 'react';
import { FaDownload, FaUser, FaCode, FaBriefcase } from 'react-icons/fa';
import './About.css';

const About = () => {
  const stats = [
    { icon: FaUser, number: '3+', label: 'Years Experience' },
    { icon: FaCode, number: '50+', label: 'Projects Completed' },
    { icon: FaBriefcase, number: '10+', label: 'Happy Clients' },
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-image-container">
            <div className="about-image-wrapper">
              <div className="about-image-placeholder">
                <span>BU</span>
              </div>
              <div className="about-image-border"></div>
            </div>
          </div>

          <div className="about-info">
            <h3 className="about-subtitle">
              I'm a passionate <span className="gradient-text">Full-Stack Developer</span>
            </h3>
            
            <p className="about-text">
              I'm Betty Uwase, a Full-Stack Developer with expertise in building 
              modern web applications using React, Node.js, and other cutting-edge 
              technologies. I love creating intuitive, dynamic user interfaces and 
              robust backend systems.
            </p>
            
            <p className="about-text">
              With 3+ years of experience in web development, I've worked on various 
              projects ranging from small business websites to complex web applications. 
              I'm always eager to learn new technologies and stay up-to-date with the 
              latest trends in web development.
            </p>

            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <stat.icon className="stat-icon" />
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            <a 
              href="/Betty_Uwase_CV.pdf" 
              download 
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                alert('CV download would start here. Please add your CV file to the public folder.');
              }}
            >
              <FaDownload style={{ marginRight: '8px' }} />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
