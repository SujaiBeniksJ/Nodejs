const fs = require('fs');


let readFile = () => fs.readFile('callbackAndPromise/Assignment3/sampleText.txt',(err, data) => {
    if(err){
        console.log(err)
    }
    console.log(data.toString())
})

let sampleText = "This is the new file created!";

let appendFile = () => fs.appendFile('callbackAndPromise/Assignment3/newFile.txt', sampleText, (err, data) => {
    if(err){
        console.log(err)
    }
    console.log('Saved!')
})

let writeFile = () => fs.writeFile('callbackAndPromise/Assignment3/writeFile.txt', sampleText, (err, data) => {
    if(err){
        console.log(err)
    }
    console.log('Updated!')
})

readFile();
appendFile();
writeFile();
