let sentence = "This sentence is the sentence that has the word sentence repaeted";
// getting the string from node arguments
let string = process.argv.slice(2)[0]; // sentence
let regexp = new RegExp(string, "g");
console.log("The word sentence is replaced by word replaced");
console.log(sentence.replace(regexp, "replaced"));