//file related to admin

var express = require("express");
var router = express.Router();

//remember there will be always /users before any path as we mentioned it in server.js

router.get("/", (req, res) => {
  res.send("adminList");
});

router.get("/newAdmin", (req, res) => {
  res.send("new admin");
});


module.exports = router;
