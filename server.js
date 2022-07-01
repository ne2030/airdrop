var express = require("express");
var app = express();
const fs = require("fs");

// respond with "hello world" when a GET request is made to the homepage
app.get("/", function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(fs.readFileSync("index.html"));
  res.end();
});

app.get("/test", function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(fs.readFileSync("test.html"));
  res.end();
});

app.listen(3000, () => {
  console.log("server listen 3000");
});
