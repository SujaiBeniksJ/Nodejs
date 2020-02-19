let animal = {
    eats: "Animal eats"
  };
  let rabbit = {
    jumps: "rabbit eats"
  };
  
  rabbit.__proto__ = animal; // (*)
  
console.log("Animal is now a prototype of rabbit so the varibales in animal can be accessed from rabbit");

console.log(rabbit.eats);

console.log(rabbit.jumps);