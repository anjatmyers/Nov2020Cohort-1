
const express = require('express');
const app = express();
const PORT = 3000;

//public
app.use(express.static('public'))

//views
app.set('view engine', 'ejs')

//routes  index aboutus
app.use(require('./routes'))
app.use(require('./routes/aboutus'))


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})