const express = require("express");
const router = express.Router();
const authReq = require('../auth');




router.get("/", (req, res) => {
  res.send("home page");
});



module.exports = router;
