const express = require('express');
const bodyParser = require('body-parser');
const app  = express();
const PORT = 3000;
const router = require('./router')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);

app.listen(PORT, ()=>{
    console.log(`servert running at port ${PORT}`);
})

