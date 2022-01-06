import React from "react";
import "./Pricing.css";
import "./../App.css";
import { Link } from "react-router-dom";

export default function Pricing() {
  return (
    <div>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">
                    Free
                  </h5>
                  <h6 className="card-price text-center">
                    $0<span className="period">/For 60 days</span>
                  </h6>
                  <hr />
                  <ul className="fa-ul">
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Single User
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Auto Lead Capture
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Contacts
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Pipeline Management
                    </li>
                    <li className="text-muted">
                      <span className="fa-li">
                        <i className="fas fa-times"></i>
                      </span>
                      Workflow Automation
                    </li>
                    <li className="text-muted">
                      <span className="fa-li">
                        <i className="fas fa-times"></i>
                      </span>
                      Email Templates
                    </li>
                    <li className="text-muted">
                      <span className="fa-li">
                        <i className="fas fa-times"></i>
                      </span>
                      Collaboration Module
                    </li>
                    <li className="text-muted">
                      <span className="fa-li">
                        <i className="fas fa-times"></i>
                      </span>
                      AI Engine
                    </li>
                  </ul>
                  <div className="d-grid">
                    <Link
                      to="/get-demo"
                      className="btn btn-primary btn-grad text-uppercase"
                    >
                      Start Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">
                    Plus
                  </h5>
                  <h6 className="card-price text-center">
                    $9<span className="period">/month</span>
                  </h6>
                  <hr />
                  <ul className="fa-ul">
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      <strong>5 Users</strong>
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Auto Lead Capture
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Contacts
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Pipeline Management
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      10 Workflow Automation
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      10 Email Templates
                    </li>
                    <li className="text-muted">
                      <span className="fa-li">
                        <i className="fas fa-times"></i>
                      </span>
                      Collaboration Module
                    </li>
                    <li className="text-muted">
                      <span className="fa-li">
                        <i className="fas fa-times"></i>
                      </span>
                      AI Engine
                    </li>
                  </ul>
                  <div className="d-grid">
                    <Link
                      to="/get-demo"
                      className="btn btn-primary btn-grad text-uppercase"
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">
                    Pro
                  </h5>
                  <h6 className="card-price text-center">
                    $49<span className="period">/month</span>
                  </h6>
                  <hr />
                  <ul className="fa-ul">
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      <strong>Unlimited Users</strong>
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Auto Lead Capture
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Contacts
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Pipeline Management
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      20 Workflow Automation
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      20 Email Templates
                    </li>

                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Collaboration Module
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      AI Engine
                    </li>
                  </ul>
                  <div className="d-grid">
                    <Link
                      className="btn btn-primary btn-grad text-uppercase"
                      to="/get-demo"
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
