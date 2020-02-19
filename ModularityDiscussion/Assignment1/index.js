// #1 way

let studentObj1 = {
    name: "john",
    age: 15,
};

studentObj1.id = 123;

console.log(`The Student object created is  ${studentObj1.name} ${studentObj1.age}`);

// #2 way

function studentObj2(fname, lname) {
    this.fname = fname;
    this.lname = lname;
}

studentObj2.prototype.showFullName = function() {
    return this.fname + this.lname;
};
let s1 = new studentObj2("john", "wilson");


console.log(`The student object created from constructor function ${s1.fname} ${s1.lname}`);
console.log("The Full name called from protype for s1 " + s1.showFullName());

let s2 = new studentObj2("Tom", "Andrew");
console.log(`The student object created from constructor function ${s2.fname} ${s2.lname}`);
console.log("The Full name called from protype for s2 " + s2.showFullName());