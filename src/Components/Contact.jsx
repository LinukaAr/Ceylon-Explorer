import React from "react";
import Button from "./layouts/Button";
import img from "../assets/img/contact.jpg";
import "../assets/css/Contact.css"; 

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-form-container">
        <form className="contact-form">
          <h1 className="contact-form-title">Contact Form</h1>
          <div className="contact-form-group">
            <label className="contact-form-label" htmlFor="userName">
              Full Name
            </label>
            <input
              className="contact-form-input"
              type="text"
              name="userName"
              id="userName"
              placeholder="Enter your name"
            />
          </div>
          <div className="contact-form-group">
            <label className="contact-form-label" htmlFor="userEmail">
              Email
            </label>
            <input
              className="contact-form-input"
              type="email"
              name="email"
              id="userEmail"
              placeholder="Enter your email"
            />
          </div>
          <div className="contact-form-group">
            <label className="contact-form-label" htmlFor="userMessage">
              Message
            </label>
            <textarea
              className="contact-form-textarea"
              name="userMessage"
              id="userMessage"
              cols="30"
              rows="3"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div className="contact-form-submit">
            <Button title="Submit" />
          </div>
        </form>
        <div className="contact-info">
          <img className="contact-info-image" src={img} alt="Contact" />
          <p className="contact-info-text">
            We'd love to hear from you! Whether you have questions, feedback, or need assistance with your travel plans, please don't hesitate to reach out. Our team is here to assist you every step of the way. Simply fill out the form below, and we'll be in touch shortly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
