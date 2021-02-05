const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  
    console.log(req.headers);
    res.send(`<h1>home page from port ${port}</h1>`)
})

app.get('/about', (req, res) => {
  
    res.send('about us page')
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})




