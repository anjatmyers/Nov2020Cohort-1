const express = require("express");
const router = express.Router();
const db = require('../models/database');

router.use(express.urlencoded({extended: false}));
router.use(express.json());

router.get("/newdish", (req, res) => {


  db.query('SELECT * FROM categories')
  .then(records =>{
    //[{}, {}, {}]
    res.render('newdish', {
      categories: records
    });

  })

});


router.post('/newdish', (req, res) => {
  
  let name = req.body.name;
  let category = req.body.category;
  let fooddescription = req.body.description;
  let price = parseFloat(req.body.price);
  let imageURL = req.body.imageURL;
  let course = req.body.course;

  //insert into our database

  db.none(`INSERT INTO restaurants (name, category, 
    fooddescription, price, course, imageurl) VALUES ($1, $2, $3, $4, $5, $6)`,
    [name, category, fooddescription, price, course, imageURL])
    .then(()=>{

      res.redirect('/dishes')
    })
    .catch(error =>{
      res.send(error)
    })
    
})


module.exports = router;
