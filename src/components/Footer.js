import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <ul>
            <li>Price Item One</li>
            <li>Price Item Two</li>
            <li>Price Item Three</li>
          </ul>
          <ul>
            <li>Price Item One</li>
            <li>Price Item Two</li>
            <li>Price Item Three</li>
          </ul>
        </div>
        <div className="footer-map">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed"
            width="300"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="footer-contact">
          <p>7480 Mockingbird Hill undefined</p>
          <p>(239) 555-0108</p>
          <div className="footer-social">
            <a href="#twitter">Twitter</a>
            <a href="#facebook">Facebook</a>
            <a href="#linkedin">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;