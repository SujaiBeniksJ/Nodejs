function objectToJSON(obj){
    console.log("JSon.stringify prints the object in json format");
    console.log(JSON.stringify(obj));
}

let obj = {
    name: "john",
    age: 15,
    id: "123",
    marks: {
        theory: 80,
        practicl: 80,
    }
};

objectToJSON(obj);