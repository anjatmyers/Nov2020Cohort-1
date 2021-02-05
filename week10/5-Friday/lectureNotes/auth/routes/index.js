const express = require("express");
const router = express.Router();

let auth = (req, res, next) => {
  if(req.isAuthenticated()){
    next()
  }
  else{
    res.redirect('/error')
  }
};

router.get("/", (req, res) => {
  res.send("home page");
});

router.get("/protected", auth, (req, res) => {
  res.send("home page");
});

module.exports = router;
