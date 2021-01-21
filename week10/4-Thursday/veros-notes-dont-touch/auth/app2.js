const express = require('express');
const app = express();
var cookieSession = require('cookie-session');

app.use(cookieSession({

    name: 'session',
    keys: ['lsdjfs;ldjs;lkjdl;skdjf;lsdkjf'],
    maxAge: 14 * 24 * 60 * 60 * 1000

}))

app.get('/', (req, res) => {
  
    req.session.lname = "Lino";

    req.session.fName = "Veronica";

    res.send('home page');
})

app.get('/about', (req, res) => {

    res.send(`${req.session.fName}  ${req.session.lname}`)
})


app.listen(3000, () => {
  
    console.log('listening on port 3000');
})