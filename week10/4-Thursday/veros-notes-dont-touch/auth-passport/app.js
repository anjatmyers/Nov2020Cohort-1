
const express = require('express');
const app = express();
const helmet = require('helmet');

//views 
app.set('view engine', 'ejs');

//public folder
app.use(express.static('public'));
app.use(helmet());

//sub routes
app.use(require('./routes'));
app.use(require('./routes/login'));
app.use(require('./routes/registration'));

app.listen(3000, () => {
  
    console.log('listening on port 3000');
})