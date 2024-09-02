import React from 'react';
import './Contacts.css'; // Import the CSS file for styling
import { FaInstagram, FaFacebookF, FaWhatsapp, FaTwitter } from 'react-icons/fa';

const Contacts = () => {
  return (
    <div className="contacts-page">
      <div className="contacts-container">
        <h1 className="contacts-title">Get in Touch</h1>

        <div className="contacts-info">
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> fleviandemesi01@gmail.com</p>
          <p><strong>Phone:</strong> +254 720123659 / 0718028795</p>
          <p><strong>Address:</strong> 456 Nairobi Street, Nairobi, Kenya</p>
        </div>

        <div className="contacts-social">
          <h2>Follow Me</h2>
          <div className="social-icons">
            <a href="https://instagram.com/fleyvorelegwa" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://wa.me/254720123659" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp className="social-icon" />
            </a>
            <a href="https://facebook.com/FlevianDemesi" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF className="social-icon" />
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
