const fs = require('fs');

let count = (i) => {
    i++;
    if(i<=100){
        console.log(i);
        count(i);
    }
}

let readFile = () => fs.readFile('sampleText.txt',(err, data) => {
    if(err){
        console.log(err)
    }
    console.log(data.toString())
})

let sampleText = "This is the new file created!";

let writeFile = () => fs.appendFile('newFile.txt', sampleText, (err, data) => {
    if(err){
        console.log(err)
    }
    console.log('Saved!')
})

let p1 = Promise.resolve('resolved')
let p2 = Promise.resolve(3)
let p3 = new Promise((res, rej) => {
    setTimeout(()=>{
        res('hello')
    }, 3000)
})

let handlePromiseAll = () => Promise.all([p1, p2, p3])
.then(data => {
    console.log(data)
})
.catch(error => {
    console.log(error); 
})

let callback1 = (res, rej) => {
    setTimeout(()=>{
        res('resolved')
    }, 3000)
}

let callback2 = (res, rej) => {
    setTimeout(()=>{
        rej('rejected')
    }, 3000)
}

let p4 = new Promise(callback1)

let p5 = new Promise(callback2)



count(0);
readFile();
writeFile();
handlePromiseAll();

p4.then(data => console.log(data))

p5
.then(data => console.log(data))
.catch(err => console.log(err))




