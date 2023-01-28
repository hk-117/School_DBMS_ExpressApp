const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const schoolHome = require('./controllers/index-controller');
const teacherRouter = require('./routes/teacher-routes');
const studentRouter = require('./routes/student-routes');

const app = express();
app.set('view engine','ejs');
const port = 5000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(teacherRouter);
app.use(studentRouter);
app.get('/',schoolHome.homePage);

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`);
});

module.exports = app;
