
const express = require('express');

const app = express();

//ejs
app.set('view engine', 'ejs');

//public
app.use(express.static('public'))

//route references
app.use(require('./routes/index'))
app.use(require('./routes/speakers'))

app.listen(3000, () => {
  
    console.log(`listening on port 3000`);
})
