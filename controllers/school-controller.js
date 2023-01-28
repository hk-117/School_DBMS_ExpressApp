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

const teacherInfoByID = (req,res)=>{
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
}

const teacherInfo = (req,res) => {
    res.render('teacherform',{
        title: "Shopnolok | Search Teacher"
    });
}

const teacherInfoPost = (req,res) => {
    const {teacherid} = req.body;
    res.redirect(`/teachers/${teacherid}`);
}

const teacherList = (req,res) => {
    res.render('teachers',{
        title: "Shopnolok | Teachers",
        teachers: teachers
    });
}

const studentInfoByID = (req,res) => {
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
}

const studentInfo = (req,res) => {
    res.render('studentform',{
        title: "Shopnolok | Search Student"
    });
}

const studentInfoPost = (req,res) => {
    const {studentid} = req.body;
    res.redirect(`/students/${studentid}`);
}

const studentList = (req,res) => {
    res.render('students',{
        title: "Shopnolok | Students",
        students: students
    });
}

const homePage = (req,res) => {
    res.render('index',{
        title: "Shopnolok | Homepage"
    });
}

module.exports = {
    teacherInfoByID,
    teacherList,
    teacherInfo,
    teacherInfoPost,
    studentInfoByID,
    studentList,
    studentInfo,
    studentInfoPost,
    homePage
};
