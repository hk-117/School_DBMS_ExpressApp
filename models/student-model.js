students = []

const Student = class Student{
    constructor(name,department,credit){
        this.name = name;
        this.department = department;
        this.credit = credit;
    }
    save(){
        students.push(this);
    }
    static fetchAll(){
        return students;
    }
}

module.exports = {
    students,
    Student
}