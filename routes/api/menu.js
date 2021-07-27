const express = require("express");
const router = express.Router();
const Menu = require("../../models/Menu");

// @rute GET api/menu
// @desc Get all menu
// @access Publc

router.get("/", async (req, res) => {
  try {
    const menu = await Menu.find();
    res.json(menu);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
