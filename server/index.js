const express = require("express");
const app = express();

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/views/welcome.html");
});

app.listen(3000);
