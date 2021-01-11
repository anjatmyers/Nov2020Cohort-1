
const express = require('express');
const app = express();

//public
app.use(express.static('public'));

//views
app.set('view engine', 'ejs');

//routes
app.use(require('./routes'))
app.use(require('./routes/forum'))


app.listen(3000, ()=>{
    console.log(`listening on port 3000`);
})