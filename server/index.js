const express = require("express");
const app = express();
const user1 = require("./fakeDB/users/user1.json");

app.get("/login", (req, res) => {
  res.redirect(
    `/welcome?email=${req.query.email}&password=${req.query.password}`
  );
});

app.get("/welcome", (req, res) => {
  const email = user1.email;
  const password = user1.password;
  if (req.query.email === email && req.query.password === password) {
    res.sendFile(__dirname + "/views/welcome.html");
  } else {
    res.send("Invalid email or password");
  }
});

app.listen(3000);
