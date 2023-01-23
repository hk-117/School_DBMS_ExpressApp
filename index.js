const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
const port = 5000;

app.get('/',(req,res)=>{
    res.send("Hello World");
});

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`);
});
