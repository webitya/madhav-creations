import React from "react";
import "./about.css";

const AboutHeroEl = () => {
  return (
    <div className="about-us">
      {/* Story Section */}
      <div className="story-section">
        <h1>
          About <span className="highlight">Our Plywood Company</span>
        </h1>
        <p className="intro">
          With decades of expertise, we craft premium plywood solutions tailored
          to your needs. Innovation, sustainability, and craftsmanship are at
          our core.
        </p>
      </div>

      {/* Journey Section */}
      <div className="journey-section">
        <h2>Our Journey</h2>
        <div className="journey-content">
          <img src="./doors.jpeg" alt="Our Journey" className="journey-image" />
          <p>
            Established in [Year], our company started with a vision to redefine
            the plywood industry. Over the years, we’ve grown into a trusted name
            by delivering sustainable, high-quality products that meet diverse
            needs. Today, we serve clients worldwide with a focus on innovation
            and environmental stewardship.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="cards-section">
        <div className="card">
          <img src="./doors.jpeg" alt="Our Vision" className="card-image" />
          <h2>Our Vision</h2>
          <p>
            To be pioneers in plywood innovation, providing eco-friendly and
            high-quality solutions for every project.
          </p>
        </div>
        <div className="card">
          <img src="./doors.jpeg" alt="Our Mission" className="card-image" />
          <h2>Our Mission</h2>
          <p>
            Deliver excellence in every sheet of plywood with sustainability,
            durability, and affordability at the forefront.
          </p>
        </div>
        <div className="card">
          <img src="./doors.jpeg" alt="Our Values" className="card-image" />
          <h2>Our Values</h2>
          <p>
            Integrity, craftsmanship, and a commitment to sustainability define
            our every endeavor.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-cards">
          <div className="team-card">
            <img src="./doors.jpeg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-card">
            <img src="./doors.jpeg" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>Head of Innovation</p>
          </div>
          <div className="team-card">
            <img src="./doors.jpeg" alt="Team Member 3" />
            <h3>Samuel Johnson</h3>
            <p>Operations Manager</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <h2>Get in Touch</h2>
        <p>
          Have questions or need a custom plywood solution? We're here to help!
        </p>
        <a href="/contact" className="contact-button">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default AboutHeroEl;
