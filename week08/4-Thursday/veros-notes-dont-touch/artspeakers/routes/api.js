const express = require("express");
const router = express.Router();
const feedbackData = require('../data/feedback.json');
const fs = require('fs');

router.use(express.json());
router.use(express.urlencoded({extended: false}));


router.get("/api", (req, res) => {
  res.json(feedbackData)
});

router.post('/api', (req, res) => {
  
    //grab data form request - body-parser 
    
    // let name = req.body.name;
    // let title = req.body.title;
    // let message = req.body.message;

    console.log(req.body);
    feedbackData.unshift(req.body);
    //take current data add new object
    //[{name, title, message}, {},{}, {}]
    // unshift(new item)
    //write to the file feedbackData.json a new object

    fs.writeFile('data/feedback.json', JSON.stringify(feedbackData), 'utf8', (err)=>{

        if(err){
            console.log(err);
        }
    })

    //send back feedbackData

    res.json(feedbackData);

})
module.exports = router;
