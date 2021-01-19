
const express = require('express');
const app = express();

const PORT = 3000;

//views
app.set('view engine', 'ejs');

//static folder
app.use(express.static('public'))

//routes
app.use(require('./routes/index'));


app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})