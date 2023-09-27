import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact_container">
      <div className="contact">
        <h2># Contact us</h2>
        <div className="form">
          <form method="POST">
            <input
              type="text"
              name="Name"
              value=""
              placeholder=" Enter Your Full Name"
              required
              autoComplete="off"
            ></input>
            <input
              type="email"
              name="Email"
              value=""
              placeholder=" Enter Your Full Email"
              required
              autoComplete="off"
            ></input>
            <input
              type="text"
              name="Subject"
              value=""
              placeholder=" Enter Your Full Subject"
              required
              autoComplete="off"
            ></input>
            <textarea
              name="Message"
              placeholder="Your Message"
              required
              autoComplete="off"
            ></textarea>
            <button type="submit"></button>
          </form>
        </div>
      </div>
      Contact
    </div>
  );
};

export default Contact;
