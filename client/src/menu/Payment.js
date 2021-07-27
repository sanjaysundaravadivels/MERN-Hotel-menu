import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import image from "../images/registration-form-5.jpg";
import img1 from "../images/img1.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
const Payment = ({ orders }) => {
  const [show, setShow] = useState(false);
  const { order, amount } = orders;
  let dict = {};
  order.map((item) => {
    dict[item.title] = 0;
  });
  order.map((item) => {
    dict[item.title]++;
  });
  const newOrder = order.filter((item) => {
    if (dict[item.title] !== 0) {
      dict[item.title] = 0;
      return item;
    }
  });

  const initialState = {
    name: "",
    email: "",
    phone: "",
    address: "",
    order: newOrder,
    total: amount,
  };

  const [formData, setFormData] = useState(initialState);

  const { name, email, phone, address } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      axios.post("/api/orders", formData, config);
      setFormData(initialState);
      setShow(true);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  if (show) {
    return (
      <Fragment>
        <div className="wrapper">
          <Card className="inner" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={img1} />
            <Card.Body>
              <Card.Title>Order Recieved</Card.Title>
              <Card.Text>
                Thank you for your love and support . Your order is on the way.
              </Card.Text>
              <Link to="/">
                <Button variant="primary">Home</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <div className="wrapper">
        <div className="inner">
          <form className="forrm" onSubmit={onSubmit}>
            <h3>Your Payment Details</h3>
            <br />
            <div className="form-wrapper form-price">
              <label for="amount">Total:</label>
              <span>₹.{amount}</span>
            </div>
            <div className="form-wrapper">
              <label for="name" className="label-input">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                id="name"
                value={name}
                onChange={(e) => onChange(e)}
                className="form-control"
                required
              ></input>
            </div>
            <div className="form-wrapper">
              <label for="email" className="label-input">
                Mail
              </label>
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                id="email"
                value={email}
                onChange={(e) => onChange(e)}
                className="form-control"
                required
              ></input>
            </div>
            <div className="form-wrapper">
              <label for="phone" className="label-input">
                Phone
              </label>
              <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                id="phone"
                value={phone}
                onChange={(e) => onChange(e)}
                className="form-control innput"
                required
              ></input>
            </div>
            <div className="form-wrapper">
              <label for="address" className="label-comment">
                Address
              </label>
              <textarea
                name="address"
                id="address"
                value={address}
                onChange={(e) => onChange(e)}
                className="form-control"
                style={{ height: "69px" }}
                required
              ></textarea>
            </div>
            <button className="buttton submit">Place Order</button>
          </form>
          <div className="image-holder">
            <img src={image} alt="hiii"></img>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Payment;
