import React from "react";
import '../css/navbar.css'
function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">

      <div className="container-fluid no-print">
        <a className="navbar-brand text-light" href="/">Business</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-light" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/scheduleList">Schedule</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/printableVersion">Print</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/login">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
