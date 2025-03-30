const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Server is running!");
});

console.log("Starting server...");

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});


