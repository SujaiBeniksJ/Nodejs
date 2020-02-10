
let p1 = Promise.resolve('resolved')
let p2 = Promise.resolve(3)
let p3 = new Promise((res, rej) => {
    setTimeout(()=>{
        res('hello')
    }, 3000)
})

let p4 = new Promise((res, rej) => {
    setTimeout(()=>{
        rej('bye')
    }, 3000)
})

let handlePromiseAll = () => Promise.all([p1, p2, p3])
.then(data => {
    console.log(data)
})
.catch(error => {
    console.log(error); 
})

let handleRejectedPromiseAll = () => Promise.all([p4, p2, p3])
.then(data => {
    console.log(data)
})
.catch(error => {
    console.log(error); 
})

//calling the functions

handlePromiseAll();
handleRejectedPromiseAll();

p3.then(data => console.log(data))
.catch(err => console.log(err))

p4.then(data => console.log(data))
.catch(err => console.log(err))