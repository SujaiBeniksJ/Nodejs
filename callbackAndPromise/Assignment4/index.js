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

// calling the functions

p4.then(data => console.log(data))

p5
.then(data => console.log(data))
.catch(err => console.log(err))