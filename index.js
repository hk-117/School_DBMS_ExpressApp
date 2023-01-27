const express = require('express');
const path = require('path');

const schoolController = require('./controllers/school-controller');

const app = express()
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine','ejs');
const port = 5000;

app.get('/teachers/:id',schoolController.teacherInfoByID);
app.get('/teachers',schoolController.teacherList);
app.get('/teacherinfo',schoolController.teacherInfo);
app.get('/studentinfo',schoolController.studentInfo);
app.post('/teacherinfo',schoolController.teacherInfoPost);
app.post('/studentinfo',schoolController.studentInfoPost);
app.get('/students/:id',schoolController.studentInfoByID);
app.get('/students',schoolController.studentList);
app.get('/',schoolController.homePage);

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`);
});

module.exports = app;
