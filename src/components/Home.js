import React from "react";

export default function Home() {
  return (
    <div className="mt-5">
      <h1>Welcome to Our Schedule App!</h1>
      <p>Plan your week with ease and stay organized.</p>
      <a href="/scheduleList" className="btn btn-primary">View Schedule</a>
      <hr />
      <h3>Features:</h3>
      <ul>
        <li>Customizable schedules for better time management</li>
        <li>Printable schedule option<span> | </span>
        <a href="/printableVersion" className="btn btn-secondary print-button">Print <i class="bi bi-printer printer-icon"></i></a>
        </li>
        <li>Easy-to-use interface</li>
      </ul>
      <hr />
      <h3>Contact Us</h3>
      <p>Have questions or feedback? We'd love to hear from you. <a href="/contact">Contact us</a>.</p>
      <hr />
      <h3>Connect with Us</h3>
      <div>
        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-facebook" /> Facebook
        </a>
        <span> | </span>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-twitter" /> Twitter
        </a>
        <span> | </span>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-instagram" /> Instagram
        </a>
      </div>
    </div>
  );
}