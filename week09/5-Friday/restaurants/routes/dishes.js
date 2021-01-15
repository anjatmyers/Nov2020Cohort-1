const express = require("express");
const router = express.Router();
const db = require('../models/database');


router.get("/dishes", (req, res) => {

  //query our database 

  db.query(`SELECT * FROM restaurants`)
  .then(records => {
      //records an array of objects  [{}, {}, {}]

      //{name, fooddescription, price, couse, imageURL}
      res.render('dishes', {
          dishes: records
      });
  })
  
  
});

module.exports = router;
