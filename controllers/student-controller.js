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
module.exports = {
    studentInfoByID,
    studentList,
    studentInfo,
    studentInfoPost
};
