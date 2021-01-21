
const express = require('express');
const app = express();
const helmet = require('helmet');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
const passport = require('passport');
require('./auth/passport-config')(passport);


passport.use( new LocalStrategy((username, password, done) =>{
        
        db.users.findAll({where: {username: username}})
        .then(records =>{
            //[{}]
            if( records  != null){

                   let record = records[0];
                   
                   bcrypt.compare(password, record.password, (err, response)=>{

                        if(response){
                            //this means a match, user with correct password 

                            //serialize user gets called here
                            done(null, {id: record.id, username: record.username})
                        }
                        else {
                            //no session for you - username mismatch 
                            done(null, false)
                        }
                   })
            }
            else{
                //no session fo you
                done(null, false)
            }
        })

    }))


    passport.serializeUser((user, done) =>{
        //passport adding information to the sessions

        done(null, user.id)

    })

    passport.deserializeUser((id, done)=>{
        //checking to see if user is valid with the cookie that was passed from request 

        // 5, 7

        db.users.findByPk(id)
        .then(record =>{
            done(null, record)
        })
    })

var cookieSession = require('cookie-session');

app.use(cookieSession({

    name: 'session',
    keys: ['lsdjfs;ldjs;lkjdl;skdjf;lsdkjf'],
    maxAge: 14 * 24 * 60 * 60 * 1000

}))

//views 
app.set('view engine', 'ejs');

//public folder
app.use(express.static('public'));
app.use(helmet());

app.use(passport.initialize());
app.use(passport.session());
//sub routes
app.use(require('./routes'));
app.use(require('./routes/login'));
app.use(require('./routes/registration'));

app.listen(3000, () => {
  
    console.log('listening on port 3000');
})