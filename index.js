const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const schoolController = require('./controllers/school-controller');
const teacherRouter = require('./routes/teacher-routes');

const app = express();
app.set('view engine','ejs');
const port = 5000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(teacherRouter);

app.get('/studentinfo',schoolController.studentInfo);
app.post('/studentinfo',schoolController.studentInfoPost);
app.get('/students/:id',schoolController.studentInfoByID);
app.get('/students',schoolController.studentList);
app.get('/',schoolController.homePage);

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`);
});

module.exports = app;
