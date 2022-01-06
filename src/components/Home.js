import React from "react";
import "./Home.css";
import "./../App.css";
import heroImg from "./../hero-img.png";
import tracking from "./../Tracking.jpg";
import Curioswoman from "./../Curios-woman.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="home-body">
        <div className="home-card">
          <img src={heroImg} alt="Customer" className="heroimg" />
          <div className="card-text">
            <div className="herotext">
              <h4>Customer Relationship Management</h4>
              <h1>Build Your Loyal Customer</h1>
              <p>
                support a global network that includes large- scale businesses
                in more than 100 countries to generate more leads.
              </p>
              <button
                type="button"
                className="btn btn-grad btn-primary herobtn"
              >
                <Link to="/get-demo">Get started</Link>
              </button>
            </div>
          </div>
        </div>

        <div className="home-card tracking-card">
          <div className="card-text">
            <div className="herotext">
              <h2>Track your results in real time.</h2>
              <ul>
                <li>
                  Track key performance indicators, including current treands
                  and future forecasts.
                </li>
                <li>
                  Measure and manage sales performance in your organization's
                  territories.
                </li>
                <li>
                  Make smarter business decesions with powerful real-time
                  analytics.
                </li>
              </ul>

              <button
                type="button"
                className="btn btn-grad btn-primary herobtn"
              >
                <Link to="/get-demo">Get started</Link>
              </button>
            </div>
          </div>
          <img src={tracking} alt="tracking" className="heroimg" />
        </div>

        <div className="home-card faq-card">
          <img src={Curioswoman} alt="Curios Woman" className="heroimg" />

          <div className="card-text">
            <div className="herotext">
              <h2>Frequently Asked Questions</h2>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What is ELYS enterprise system?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>ELYS enterprise system</strong> is a customer
                      relationship management platform. Our platform includes{" "}
                      <strong>
                        large scale businesses in more than 100 countries
                      </strong>{" "}
                      to generate more leads. ELYS enterprise system comes with
                      features from Omnichannel capabilities to pipeline
                      management and automation, all bundled in one package.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Why ELYS enterprise system?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      ELYS enterprise system comes with features from
                      Omnichannel capabilities to pipeline management and
                      automation, all bundled in one package. You can experience
                      what ELYS enterprise system can do for you for free,
                      before you commit to adopting it, across your
                      organization. With 24x5 standard support and 24x7 premium
                      support, a team of experts are ready to assist you at any
                      time.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      What is the purpose of ELYS enterprise system?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      ELYS enterprise system lets you store customer and
                      prospect contact information, identify sales
                      opportunities, record service issues, and manage marketing
                      campaigns, all in one central location - and make
                      information about every customer interaction available to
                      anyone at your company who might need it.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div className="bottom-board">
            <h2>Unleash your growth potential</h2>
            <button
              type="button"
              className="btn btn-primary bottom-btn"
              Style="color: black"
            >
              <Link to="/get-demo" Style="color: #f66cb0">
                Get started
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
