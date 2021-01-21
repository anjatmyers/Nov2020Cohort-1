const express = require('express');
const app = express();
var cookieSession = require('cookie-session');

app.use(cookieSession({

    name: 'session',
    keys: ['lsdjfs;ldjs;lkjdl;skdjf;lsdkjf'],
    maxAge: 14 * 24 * 60 * 60 * 1000

}))

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.set('view engine', 'ejs');

let authLogin = (req, res, next)=>{
    //check session username 

    if(req.session.username){
        next()
    }
    else{
        res.redirect('/login')
    }
}

app.all('/admin/*', authLogin, (req, res, next) => {
    next()
})

app.get('/', (req, res) => {
  
    res.send('home page')
})

app.get('/admin/dashboard', (req, res) => {
  
    res.send('dashboard')
})

app.get('/admin/users',  (req, res) => {
  
    res.send('admin users')
})


app.get('/login', (req, res) => {
  
    res.render('login')
})

let users = [
    {username: 'Matt', password: '1234'},
    {username: 'Kanny', password: '5678'},
    {username: 'Andrea', password: '2234'},
    {username: 'Ally', password: '8976'},
]

app.post('/login', (req, res) => {
  
    //username
    //password
    let userID = req.body.userID;
    let password = req.body.password;

    let user = users.find(userRecord =>{

        return userRecord.username === userID  && userRecord.password === password;
    })

    if(user != null){
        // set session info

        if(req.session){
            req.session.username = userID; 

            res.redirect('/')
        }
    }
    else {
        res.redirect('/login')
    }

})


app.listen(3000, () => {
  
    console.log('listening on port 3000');
})


