// import React from "react";
import './Contact.css';
import React, { useState } from 'react';
import axios from 'axios';

function Contact(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make API call using Axios
    axios.post('http://127.0.0.1:8000/app/feedback/', formData)
      .then(response => {
        console.log('Data sent successfully:', response.data);
        // You can handle success here, e.g., show a success message to the user
      })
      .catch(error => {
        console.error('Error sending data:', error);
        // Handle errors, show error message to the user, etc.
      });
  };
    return(
        <>
            <section id="breadcrumbs" class="breadcrumbs">
      <div class="container">
     
<br/><br/><br/>
      </div>
    </section>

    <section id="contact" class="contact">
      <div class="container">

        <div class="row justify-content-center" data-aos="fade-up">

          <div class="col-lg-10">

            <div class="info-wrap">
              <div class="row">
                <div class="col-lg-4 info">
                  <i class="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>A108 Adam Street<br/>New York, NY 535022</p>
                </div>

                <div class="col-lg-4 info mt-4 mt-lg-0">
                  <i class="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>info@example.com<br/>contact@example.com</p>
                </div>

                <div class="col-lg-4 info mt-4 mt-lg-0">
                  <i class="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+1 5589 55488 51<br/>+1 5589 22475 14</p>
                </div>
              </div>
            </div>

          </div>

        </div>

        <div class="row mt-5 justify-content-center" data-aos="fade-up">
          <div class="col-lg-10">
            <form onSubmit={handleSubmit}   class="php-email-form">
              <div class="row">
                <div class="col-md-6 form-group">
                  <input type="text" name="name" value={formData.name} onChange={handleChange} class="form-control" id="name" placeholder="Your Name" required/>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" value={formData.email} onChange={handleChange} class="form-control" name="email" id="email" placeholder="Your Email" required/>
                </div>
              </div>
              <div class="form-group mt-3">
                <input type="text" value={formData.subject} onChange={handleChange} class="form-control" name="subject" id="subject" placeholder="Subject" required/>
              </div>
              <div class="form-group mt-3">
                <textarea class="form-control" value={formData.summary} onChange={handleChange} name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div class="my-3">
                {/* <div class="loading">Loading</div>
                <div class="error-message"></div> */}
                {/* <div class="sent-message">Your message has been sent. Thank you!</div> */}
              </div>
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form> 
            {/* <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Subject:</label>
        <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
      </div>
      <div>
        <label>Summary:</label>
        <textarea name="summary" value={formData.summary} onChange={handleChange} required />
      </div>
      <button type="submit">Submit</button>
    </form> */}
          </div>

        </div>

      </div>
    </section>
        </>
    );
}
export default Contact;