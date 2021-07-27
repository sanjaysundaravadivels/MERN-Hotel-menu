import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import about from "./about.jpg";

const About = () => {
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
                <img src={about} alt="" />
              </div>
            </div>
            <div
              className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content "
              style={{ opacity: "0.9" }}
            >
              <h3 className="text-light" style={{ color: "white" }}>
                At Royal Chettinad, we believe in everything at its prime. Our
                focus is to bring the best and most responsibly sourced
                ingredients to the table.
              </h3>
              <br />
              <br />
              <p className="fst-italic" style={{ color: "white" }}>
                What is Chettinad cuisine and what makes it so special
              </p>
              <ul>
                <li>
                  <p style={{ color: "white" }}>
                    Chettinad Cuisine is the cuisine of the Chettinad region of
                    Tamil Nadu.The cuisine is well known for the complexity of
                    flavours.{" "}
                  </p>
                </li>
                <li>
                  <p style={{ color: "white" }}>
                    Traditionally, the spices were grounded using grinding
                    stones. Chettinad cuisine is loaded with distinct aromas and
                    flavours.{" "}
                  </p>
                </li>
                <li>
                  <p style={{ color: "white" }}>
                    Another distinct feature of this cuisine is that it uses
                    sun-dried vegetables and meats in the dishes, which helps in
                    preserving their nutritional value.
                  </p>
                </li>
              </ul>

              <div class="btns">
                <Link
                  to="/menu"
                  className="btn-menu animated fadeInUp scrollto"
                  style={{ textDecoration: "none" }}
                >
                  Our Menu
                </Link>
                <Link
                  to="/"
                  className="btn-book animated fadeInUp scrollto"
                  style={{ textDecoration: "none" }}
                >
                  <FaHome /> &nbsp; Back to home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
