const express = require("express");
const router = express.Router();
let dataFile = require('../data/data.json');
//{speakers: [{}, {}, {}]}
router.get('/', (req, res) => {
  
    let pageSpeakers = dataFile.speakers;  ///array of speakers  [{}, {}, {}]

    
    let pagePhotos = [];

    
    pageSpeakers.forEach(speakerObj =>{
        pagePhotos = pagePhotos.concat(speakerObj.artwork)
    })

    console.log(pagePhotos);

    res.render('index', {
        artwork: pagePhotos,
        pageTitle: "Roux Meetups", 
        pageID: 'home'
    });
})

module.exports = router;
