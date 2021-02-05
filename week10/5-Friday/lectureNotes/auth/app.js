const express = require("express");
const app = express();
const helmet = require("helmet");
const passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy;
const db = require("./models");
const bcrypt = require("bcryptjs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

var cookieSession = require("cookie-session");

app.use(
  cookieSession({
    name: "session",
    keys: ["lsdjfs;ldjs;lkjdl;skdjf;lsdkjf"],
    maxAge: 14 * 24 * 60 * 60 * 1000,
  })
);

///passport
//req.body.password
//req.body.username
passport.use(
  new LocalStrategy(async function (username, password, done) {
    //left to us to figure out
    /*
        plan
        find username (db.users.findAll)
        compare password entered to password in db (bcrypt.compare)
        if there is a match for password return done(null, user)
        if no match for username OR password, return done(null, false)

      */
    //return done(null, user);
    //return done(null, false);

    let records = await db.users.findAll({ where: { username: username } });

    if (records) {
      let record = records[0];

      bcrypt.compare(password, record.password, (err, response) => {
        if (response) {
          done(null, record);
        } else {
          done(null, false);
        }
      });
    } else {
      done(null, false);
    }
  })
);

passport.serializeUser((user, done) => {
  console.log("serialize");
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  console.log("deserialize");
try{
  var record = await db.users.findByPk(id);
  done(null, record);
}
catch(error){
    done(null, null)
}
});

//views
app.set("view engine", "ejs");

//public folder
app.use(express.static("public"));
app.use(helmet());

app.use(passport.initialize());
app.use(passport.session());
//sub routes
app.use(require("./routes"));
app.use(require("./routes/login"));
app.use(require("./routes/registration"));

app.listen(3000, () => {
  console.log("listening on port 3000");
});
