teachers = []

const Teacher = class Teacher{
    constructor(name,department,salary){
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
    save(){
        teachers.push(this);
    }
    static fetchAll(){
        return teachers;
    }
}

module.exports = {
    teachers,
    Teacher
}