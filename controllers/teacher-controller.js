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
module.exports = {
    teacherInfoByID,
    teacherList,
    teacherInfo,
    teacherInfoPost
};
