
let p1 = Promise.resolve('resolved')
let p2 = Promise.resolve(3)
let p3 = new Promise((res, rej) => {
    setTimeout(()=>{
        res('hello')
    }, 3000)
})

let p4 = new Promise((res, rej) => {
    setTimeout(()=>{
        rej(new Error('bye'))
    }, 3000)
})

let handlePromiseAll = () => Promise.all([p1, p2, p3])
.then(data => {
    console.log(`All the Promises are resolved ${data}`)
})
.catch(error => {
    console.log(`This line will not be executed ${error}`); 
})

let handleRejectedPromiseAll = () => Promise.all([p3, p2, p4])
.then(data => {
    console.log(`This line will not be executed ${data}`)
})
.catch(error => {
    console.log(`An Error Will be caught here ${error}`); 
})

//calling the functions

handlePromiseAll();
handleRejectedPromiseAll();

p3.then(data => console.log(`This resolved value is ${data}`))
.catch(err => console.log(`This line will not be executed ${err}`))

p4.then(data => console.log(`This line will not be executed ${data}`))
.catch(err => console.log(`The rejected value is ${err}`))