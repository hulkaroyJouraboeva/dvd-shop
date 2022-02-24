// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const dvdsRoute = require("./controllers/dvdController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming (as) JSON

// ROUTES
app.get("/", (request, response) => {
  console.log("Request to GET at /");
  response.send("Hello, world!");
});

app.use("/dvds", dvdsRoute);

app.get("*", (request, response) => {
  console.log("Invalid URL detected");
  response.status(404).json({ error: `Page not found, request to ${request.path} failed` });
});

/////////////////////////////////////
// REMOVE AFTER SUCCESSFUL DEPLOYMENT
/////////////////////////////////////

// const db = require("./db/dbConfig.js");

// app.get("/test", async (req, res) => {
//   try {
//     const allDays = await db.any("SELECT * FROM test");
//     res.json(allDays);
//   } catch (err) {
//     res.json(err);
//   }
// });

/////////////////////////////////////
// REMOVE AFTER SUCCESSFUL DEPLOYMENT
/////////////////////////////////////

// EXPORT
module.exports = app;
