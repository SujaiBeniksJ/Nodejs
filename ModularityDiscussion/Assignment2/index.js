function studentSectionA(fname, lname) {
    this.fname = fname;
    this.lname = lname;
}

studentSectionA.prototype.section = "A";
studentSectionA.prototype.getFullName = function(){
    return this.fname + " " + this.lname;
};

let s1 = new studentSectionA("abraham", "lincoln");
let s2 = new studentSectionA("John", "Watson");

console.log("fname and lname are differ from each student object");
console.log(s1.fname+" "+s1.lname);
console.log(s2.fname+" "+s2.lname);

console.log("But Section and getFullName property have similar value or functionalities for all the studentSectionA objects");
console.log(s1.section+" "+s1.getFullName());
console.log(s2.section+" "+s2.getFullName());