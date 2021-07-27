const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema({});
module.exports = Menu = mongoose.model("menu", MenuSchema);
