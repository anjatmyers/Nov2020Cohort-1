const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));


router.get('/', (req, res) => {
    
    res.render('index')
})

router.post('/', (req, res) => {
  
    let firstName = req.body.fName;
    let lastName = req.body.lName;

    
    console.log(req.body.fName, req.body.lName, req.body);

    res.json(`${firstName} ${lastName}`)
})


module.exports = router;
