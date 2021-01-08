const express = require("express");
const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');

app.use(require('./routes'))



app.listen(3000, () => {
  console.log("This is port 3000!");
});
