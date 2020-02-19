class College {
    constructor(){
        this.clgname="College name1";
    }
}

class Student extends College{
    constructor(name) {
        super();
        this.name = name;
    }

    get nameHandler(){
        return this.name;
    }

    set nameHandler(name) {
        this.name = name;
    }

    displayGreeting() {
        console.log(`Hi ${this.name}!`);
    }

    static add(num1, num2) {
        return num1 + num2;
    }
}



let s1 = new Student("John");
let s2 = new Student();


console.log("Calling the displayGreeting method using s1 object");
s1.displayGreeting();

console.log("Setting the new name and getting the new name from s2 object");
s2.nameHandler = "Abraham";
console.log(s2.nameHandler);

console.log("calling the add method using static");
console.log(Student.add(1,2));

console.log("calling the collge name attribute of Parent Class from s1 object");
console.log(s1.clgname);
console.log(s2.clgname);