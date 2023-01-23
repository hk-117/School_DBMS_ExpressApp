const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine','ejs');
const port = 5000;

app.get('/teachers/:id',(req,res)=>{
    res.send("<h1> Teacher Information </h1>");
});

app.get('/teachers',(req,res)=>{
    res.send("<h1> Teachers </h1>");
});

app.get('/students/:id',(req,res)=>{
    res.send("<h1> Student Information </h1>");
});

app.get('/students',(req,res)=>{
    res.send("<h1> Students </h1>");
});

app.get('/',(req,res)=>{
    res.render('index',{
        title: "Shopnolok | Homepage"
    });
});

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`);
});
