const express = require("express");
const router = express.Router();

router.use(express.urlencoded({extended:false}));
router.use(express.json());

router.get("/", (req, res) => {

  res.render('index')

});

router.post('/', (req, res) => {

    //store info in db
    let username = req.body.username; 
    let password = req.body.password;

    //res.send(`${username} ${password}`)

    res.render('registration', {
        username: username,
        password: password
    })
}
)

module.exports = router;
