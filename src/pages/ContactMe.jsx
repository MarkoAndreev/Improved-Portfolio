import React, { useState } from "react";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with following data:", formData);
  };

  return (
    <section className="contact-section">
      <h2>Contact Me</h2>

      <div className="contactme-container">
        <div className="contact-info">
          <h3>Contact Information</h3>

          <p>Email: andreevmarko6@gmail.com</p>
        </div>

        <div className="form-container">
          <h3>Send A Message My Way!</h3>

          <form onSubmit={handleSubmit} className="form">
            <div className="name-container">
              <label className="name-title-container">Name:</label>

              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="input"
              />
            </div>

            <div className="name-container">
              <label className="name-title-container">Email:</label>

              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="input"
              />
            </div>

            <div className="name-container">
              <label className="name-title-container">Message:</label>

              <input
                type="text"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="input"
              />
            </div>
            <div className="submit-button-container">
              <button type="submit-button" className="submit-button"><p>Submit</p></button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;