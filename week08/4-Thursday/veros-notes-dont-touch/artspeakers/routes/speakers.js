const express = require("express");
const router = express.Router();


router.get('/speakers', (req, res) => {
  
    res.render('speakers')
})

module.exports = router;
