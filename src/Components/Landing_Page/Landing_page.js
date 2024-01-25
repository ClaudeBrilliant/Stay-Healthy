import React from 'react';
import './LandingPage.css';

function Landing_Page() {
    return(
        <section className="hero-section">
        <div>
          <div data-aos="fade-up" className="flex-hero">
              
              <h1>
                Your Health<br/>
                <span className="text-gradient">
        
                  Our Responsibility
                </span>
              </h1>
                <div className="blob-cont">
                    <div className="blue blob"></div>
                </div>
                <div className="blob-cont">
                    <div className="blue1 blob"></div>
                </div>
              <h4>
              Explore a diverse range of healthcare professionals specializing in various fields. Our platform provides detailed profiles of each doctor, including their credentials, specialties, and expertise. Discover caring physicians who prioritize your well-being.
              </h4>
              <a href="#services">
                <button className="button">Get Started</button>
              </a>
                
          </div>
  
        </div>
      </section>

    );
};

export default Landing_Page;