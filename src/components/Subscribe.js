import React from 'react';
import '../styles/Subscribe.css';

const Subscribe = () => {
  return (
    <section className="subscribe-section">
      <h2>SUBSCRIBE</h2>
      <p>Subscribe to get exclusive news & offers</p>
      <div className="subscribe-form">
        <input
          type="email"
          placeholder="Enter Your Address Email"
          className="subscribe-input"
        />
        <button className="subscribe-button">SUBSCRIBE</button>
      </div>
    </section>
  );
};

export default Subscribe;