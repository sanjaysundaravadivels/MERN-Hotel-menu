const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

//connect database
connectDB();

//INIT middleware
app.use(express.json({ extended: false }));

//Define Routes
app.use("/api/menu", require("./routes/api/menu"));
app.use("/api/orders", require("./routes/api/orders"));

//Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.get("/", (req, res) => res.send("API running"));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
