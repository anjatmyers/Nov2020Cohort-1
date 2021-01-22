const express = require("express");
const router = express.Router();
const authReq = require('../auth');


router.all('/admin/*', authReq);

router.get("/", (req, res) => {
  res.send("home page");
});

router.get('/admin/protected',  (req, res) => {
  console.log('authentiated');
  res.send('protected')
})


router.get('/admin/users',  (req, res) => {
  console.log('users detials');
  res.send('users details')
})


router.get('/error', (req, res) => {
  
  res.send('error')
})

router.get('/logout', (req, res) => {
  //session is cleared
  req.logout();  //on the req object by passport

  res.redirect('/')
})

module.exports = router;
