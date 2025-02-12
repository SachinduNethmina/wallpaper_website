import React from "react";
import "./About.css"; // Ensure you have the correct path to your CSS file

const About = () => {
  return (
    <div className="full-bg">
      {" "}
      {/* Added full-bg class for background */}
      <div className="about-banner">
        <img
          src="https://wallpaper.forfun.com/fetch/d1/d197f3d63e273b6f5c105412b799eae6.jpeg" // Replace with your actual image URL
          alt="About Us Banner"
          className="about-banner-img"
        />
        <div className="about-banner-text">
          <h1 className="about-title">About Us</h1>
        </div>
      </div>
      <div className="about-content">
        <p className="about-description">
          Welcome to our website! We are dedicated to providing you with the
          best service and experience. Our team works tirelessly to create
          quality content that helps you achieve your goals. Here’s a little bit
          more about what we do:
        </p>

        <div className="about-section">
          <h2 className="section-title">Our Mission</h2>
          <p>
            Our mission is to create innovative solutions and provide top-notch
            services that meet our customers’ needs and exceed their
            expectations.
          </p>
        </div>

        <div className="about-section">
          <h2 className="section-title">Our Vision</h2>
          <p>
            We envision a world where technology empowers people to live more
            productive, fulfilling lives. Our goal is to provide accessible
            solutions for everyone.
          </p>
        </div>

        {/* <div className="about-section">
          <h2 className="section-title">Our Team</h2>
          <div className="team">
            <img
              src="https://via.placeholder.com/200" // Replace with actual team image
              alt="Team Member 1"
              className="team-member"
            />
            <img
              src="https://via.placeholder.com/200" // Replace with actual team image
              alt="Team Member 2"
              className="team-member"
            />
            <img
              src="https://via.placeholder.com/200" // Replace with actual team image
              alt="Team Member 3"
              className="team-member"
            />
          </div>
        </div> */}

        <div className="about-section">
          <h2 className="section-title">Contact Us</h2>
          <p>If you have any questions, feel free to reach out to us!</p>
        </div>
      </div>
    </div>
  );
};

export default About;
