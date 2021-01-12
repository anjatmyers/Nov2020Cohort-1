const express = require("express");
const router = express.Router();

router.get("/feedback", (req, res) => {
  res.render("feedback", {
    pageTitle: "Roux Meetups -Feedback", 
    pageID: 'feedback', 
    artwork: []
  });
});

module.exports = router;
