const express = require('express');
const path = require('path');

const app = express();
const port = 5000;

app.get('/',(req,res)=>{
    res.send("Hello World");
});

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`);
});
