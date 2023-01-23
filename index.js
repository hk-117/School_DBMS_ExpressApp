const express = require('express');
const path = require('path');

const app = express()
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine','ejs');
const port = 5000;

teachers = [
    {
        ID:1,
        name:"Rujia Liu",
        dept_name: "CSE",
        salary: 45000
    },
    {
        ID:2,
        name:"Steven Halim",
        dept_name: "CSE",
        salary: 35000
    },
    {
        ID:3,
        name:"Felix Halim",
        dept_name:"CSE",
        salary: 30000
    }
];

students = [
    {
        ID:1,
        name:"Zubayer Islam",
        dept_name: "CSE",
        total_credit: 120
    },
    {
        ID:2,
        name:"Imtiaz Mahmud",
        dept_name: "CSE",
        total_credit: 128
    },
    {
        ID:3,
        name:"Saroar Kibria Romim",
        dept_name: "ME",
        total_credit: 124
    },
];

app.get('/teachers/:id',(req,res)=>{
    teacher = teachers.find((teacher)=>{
        return teacher.ID == req.params.id;
    });
    if( teacher === undefined ){
        res.send(`No teacher data was found with the ID: ${req.params.id}`);
        return;
    }
    res.render('teacher',{
        title: "Teacher Information",
        teacher: teacher
    });
});

app.get('/teachers',(req,res)=>{
    res.render('teachers',{
        title: "Shopnolok | Teachers",
        teachers: teachers
    });
});

app.get('/students/:id',(req,res)=>{
    student = students.find((student)=>{
        return student.ID == req.params.id;
    });
    if( student === undefined ){
        res.send(`No student data was found with the ID: ${req.params.id}`);
        return;
    }
    res.render('student',{
        title: "Student Information",
        teacher: student
    });
});

app.get('/students',(req,res)=>{
    res.render('students',{
        title: "Shopnolok | Students",
        students: students
    });
});

app.get('/',(req,res)=>{
    res.render('index',{
        title: "Shopnolok | Homepage"
    });
});

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`);
});
