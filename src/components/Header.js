import React from "react";
import { Link } from "react-router-dom";
import './Header.css';
import './../App.css';
import Logo from './../Logo.png';



export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/ELYS">
        <img src={Logo} alt="" width="300vw" className="d-inline-block align-text-top"/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ELYS">
                Services
              </Link>
            </li>
            <button type="button" className="btn btn-grad btn-primary" ><Link className="headerlink" to="/get-demo"> Get a Demo</Link></button>
          </ul>
        </div>
      </div>
    </nav>
  );
}
