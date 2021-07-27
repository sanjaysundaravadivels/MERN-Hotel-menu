import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { BiFoodMenu } from "react-icons/bi";
import { SiCodechef } from "react-icons/si";
import logo from "./images/logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";

const Homepage = () => {
  return (
    <Fragment>
      <header>
        <div className="px-3 py-2 bg-dark text-white">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <Link
                to="/"
                className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
              >
                <div
                  className="bi me-2"
                  width="40"
                  height="62"
                  role="img"
                  aria-label="Bootstrap"
                >
                  <img src={logo} alt="Welcome" className="loggo" />
                </div>
              </Link>

              <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                <li>
                  <Link to="/" className="nav-link text-secondary">
                    <svg
                      className="bi d-block mx-auto mb-1"
                      width="24"
                      height="24"
                    >
                      <FaHome size={25} />
                    </svg>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/menu" className="nav-link text-white">
                    <svg
                      className="bi d-block mx-auto mb-1"
                      width="24"
                      height="24"
                    >
                      <BiFoodMenu size={25} />
                    </svg>
                    Menu
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="nav-link text-white">
                    <svg
                      className="bi d-block mx-auto mb-1"
                      width="24"
                      height="24"
                    >
                      <SiCodechef size={25} />
                    </svg>
                    About us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="nav-link text-white">
                    <svg
                      className="bi d-block mx-auto mb-1"
                      width="24"
                      height="24"
                    >
                      <FaPhoneAlt size={25} />
                    </svg>
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main className="home-page">
        <section id="hero" className="d-flex align-items-center">
          <div
            className="container position-relative text-center text-lg-start"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="row">
              <div className="col-lg-8">
                <h1>
                  Welcome to <span>Royal Chettinad</span>
                </h1>
                <br />
                <br />
                <br />
                <h2>Delivering great food for more than 18 years!</h2>
                <br />
                <br />
                <br />
                <div className="row">
                  <div className="col-lg-8">
                    <h2>
                      Unexpected flavours forged from nature and mingled with
                      flourish
                    </h2>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 d-flex align-items-center justify-content-center position-relative"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <a
                  href="https://www.youtube.com/watch?v=GlrxcuEDyF8"
                  className="glightbox play-btn"
                  target="_blank"
                ></a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Homepage;
