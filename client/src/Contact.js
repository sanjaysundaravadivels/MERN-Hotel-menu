import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaMailBulk,
  FaClock,
  FaHome,
} from "react-icons/fa";

const Contact = () => {
  return (
    <Fragment>
      <section id="about" className="about ">
        <div className="container " data-aos="fade-up">
          <div className="row">
            <div
              className="col-lg-6 order-1 order-lg-2"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="about-img">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d31277.392590399475!2d77.22692517060347!3d11.503418427156909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3ba920d7acaa3fc1%3A0x280672077bfe9e9b!2sSathyamangalam%2C%20Tamil%20Nadu%20638402!3m2!1d11.5034192!2d77.2444348!5e0!3m2!1sen!2sin!4v1627300834911!5m2!1sen!2sin"
                  style={{
                    width: "550px",
                    height: "450px",
                    style: "border:0;",
                  }}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <div
              className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1  "
              style={{ opacity: "0.9" }}
            >
              <Link
                to="/"
                className="social-links"
                style={{
                  textDecoration: "none",
                  color: "white",
                  borderRadius: "3px",
                }}
              >
                {" "}
                <FaHome /> Home
              </Link>
              <h3 className="text-light" style={{ color: "white" }}>
                Contact Details
              </h3>
              <br />
              <br />
              <div className=" col-md-6">
                <div className="footer-info">
                  <h2 style={{ color: "white" }}>Royal Chettinad</h2>

                  <br />
                  <br />
                  <h4 style={{ color: "white" }}>
                    <FaClock /> Open Hours:
                  </h4>
                  <p>
                    Monday-Sunday:
                    <br />
                    9:00 AM - 11:00 PM
                  </p>
                  <br />

                  <p style={{ color: "white" }}>
                    Sathyamangalam bus stand opposite <br />
                    Erode, 638401 <br /> <br />
                    <strong>Phone:</strong> 1112223334 <br />
                    <strong>Email:</strong> royalchettinad@gmail.com <br />
                  </p>
                  <br />

                  <div className="">
                    <a
                      href="#"
                      className="social-links"
                      style={{ color: "white" }}
                    >
                      <FaTwitter />
                    </a>
                    &nbsp;&nbsp;
                    <a
                      href="#"
                      className="social-links"
                      style={{ color: "white" }}
                    >
                      <FaFacebook />
                    </a>
                    &nbsp;&nbsp;
                    <a
                      href="#"
                      className="social-links"
                      style={{ color: "white" }}
                    >
                      <FaInstagram />
                    </a>
                    &nbsp;&nbsp;
                    <a
                      href="#"
                      className="social-links"
                      style={{ color: "white" }}
                    >
                      <FaMailBulk />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Contact;
