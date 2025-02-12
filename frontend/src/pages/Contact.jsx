import React, { useState } from "react";
import "./Contact.css"; // Ensure you have the correct path to your CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!"); // You can replace this with form submission logic
  };

  return (
    <div className="full-bg">
      {" "}
      {/* Using full-bg class for background */}
      <div className="contact-banner">
        <img
          src="https://steamuserimages-a.akamaihd.net/ugc/940586530515504757/CDDE77CB810474E1C07B945E40AE4713141AFD76/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" // Replace with your actual image URL
          alt="Contact Us Banner"
          className="contact-banner-img"
        />
        <div className="contact-banner-text">
          <h1 className="contact-title">Contact Us</h1>
        </div>
      </div>
      <div className="contact-content">
        <p className="contact-description">
          We'd love to hear from you! Whether you have questions, feedback, or
          just want to say hello, feel free to reach out.
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="contact-form-field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-form-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="contact-form-submit">
            Send Message
          </button>
        </form>

        <div className="contact-details">
          <h2 className="contact-section-title">Our Contact Information</h2>
          <p>Email: contact@company.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Main Street, City, Country</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
