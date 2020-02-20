class Animal {
    constructor(name, age){
        this.name= name;
        this.age= age;
    }

}

class Human extends Animal{
    constructor(name, age){
        super(name, age);
        this.nooflegs = "";
    }
    set legs(legs){
        this.nooflegs = legs;
    }
    get legs() {
        return this.nooflegs;
    }
}

class Bird extends Animal{
    constructor(name, age){
        super(name, age);
        this.noofwings = "";
    }
    set wings(wings){
        this.noofwings = wings;
    }
    get wings() {
        return this.noofwings;
    }
}

class Reptiles extends Animal{
    constructor(name, age){
        super(name, age);
        this.nooftail = "";
    }

    set tails(tails){
        this.nooftail = tails;
    }
    get tails() {
        return this.nooftail;
    }
}

let human1 = new Human("John", 15);
let bird1 = new Bird("Dove", 20);
let reptiles1 = new Reptiles("croc", 30);

human1.legs = 20;

bird1.wings = 30;

reptiles1.tails = 40;

console.log("Printing the number of legs wings and reptiles using get method");
console.log(human1.legs);
console.log(bird1.legs);
console.log(reptiles1.legs);

let result = [human1, bird1, reptiles1];
console.log("Printing the attributes of Human, bird,reptiles in an array");
console.log(result);