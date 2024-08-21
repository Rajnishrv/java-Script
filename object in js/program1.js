// //usign litrels
// let student = {
//     id : 21,
//     name: "rajnish",
//     cont: 9132542,
//     sub:['abc', 'rajn']
// }
// console.log(student.id)
// console.log(student)
// console.log(student.sub[1])

// //creating object using function
// function emp (id, ename, sal){
//     this.id = id
//     this.ename= ename;
//     this.sal=sal;
// }
// let e1 = new emp(234,"rajnish", 25355);

// console.log(e1.ename);
// e1.job="dev";
// console.log(e1)
// e1.ename= "abc"
// console.log(e1)
// delete e1.job
// console.log(e1)

//creating object using constructor
class EmpName {
    constructor(id, ename, sal, role) {
        this.id = id;
        this.ename = ename;
        this.sal = sal;
        this.role = role;
    }
}

class hrs extends EmpName{
    constructor(HrId, Hrname,id,ename, sal, role){
        super(id, ename, sal, role)
        this.HrId=HrId;
        this.Hrname=Hrname;
    }
}
let hr1 = new hrs(234,"rajni", 25355,"rajnish",45849,"dev");
console.log(hr1)