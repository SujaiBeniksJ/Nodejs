const fs = require('fs');


fs.readFile('callbackAndPromise/Assignment3/sampleText.txt',(err, data) => {
    if(err){
        console.log(`This line will not be reached ${err}`)
    }
    console.log(`The Readed File is: ${data.toString()}`)
})

let sampleText = "This is the new file created!\n";

fs.appendFile('callbackAndPromise/Assignment3/newFile.txt', sampleText, (err, data) => {
    if(err){
        console.log(err)
    }
    console.log('The Data is Saved!')
})

fs.writeFile('callbackAndPromise/Assignment3/writeFile.txt', sampleText, (err, data) => {
    if(err){
        console.log(err)
    }
    console.log('Data is Updated!')
})

let readableStream = fs.createReadStream("callbackAndPromise/Assignment3/readStream.txt");

let writeableStream = fs.createWriteStream("callbackAndPromise/Assignment3/writeStream.txt");

readableStream.on("data", (data) => {
    console.log('data chunked')
});

// data is copied from readStream to writeStream
readableStream.pipe(writeableStream)