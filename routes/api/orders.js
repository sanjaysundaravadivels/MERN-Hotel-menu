const express = require("express");
const router = express.Router();
const Orders = require("../../models/Orders");

const request = require("request");
const config = require("config");
const { check, validationResult } = require("express-validator/check");

// @rute POST api/orders
// @desc Create a order
// @access public
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Email is required").not().isEmpty(),
    check("address", "Address is required").not().isEmpty(),
    check("phone", "Phone no is required").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      var d = new Date();
      var n = d.toLocaleTimeString();
      const newOrder = new Orders({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone,
        time: n,
        order: req.body.order,
        total: req.body.total,
      });
      const order = newOrder.save();
      res.json(newOrder);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
