
const express = require('express');

const app = express();

app.set('view engine', 'ejs');

//app.set('views', 'views')


app.use(express.static('public'));

//sub routes
app.use(require('./routes/index'));
app.use(require('./routes/aboutus'));


app.listen(3000, () => {
  
    console.log('Server is running on port 3000');
})