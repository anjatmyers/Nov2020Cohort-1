const express = require("express");
const router = express.Router();
let dataFile = require('../data/data.json');

let pageSpeakers = dataFile.speakers; //[{}, {}, {}]
router.get('/speakers', (req, res) => {
    //all images
    let pagePhotos = [];

    pageSpeakers.forEach(speakerObj =>{
        pagePhotos = pagePhotos.concat(speakerObj.artwork);
    })

    res.render('speakers', {
        artwork: pagePhotos,
        speakers: pageSpeakers,
        pageTitle: "Roux Meetups--Speakers",
        pageID: 'speakers'
    })
})

router.get('/speakers/:speakerid', (req, res) => {
  
    //some comment 
    let photos = [];
    let speakers = []; //[{}]

    pageSpeakers.forEach(speakerObj => {

        if(speakerObj.shortname === req.params.speakerid){
            photos = speakerObj.artwork;
            speakers.push(speakerObj)
        }
    })

    res.render('speakers', {
        artwork: photos,
        speakers: speakers,
        pageTitle: `Roux Meetups--${speakers[0].name}`, 
        pageID: 'speakerDetail'
    })
})

module.exports = router;
