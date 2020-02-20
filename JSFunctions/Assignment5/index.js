let jsonObj="{";

function objectToJSON(obj){
    Object.keys(obj).map(key => {
        if(typeof obj[key] !== "object"){
            jsonObj+=`"${key}":"${obj[key]}"`;
        }
        else{
            if(Array.isArray(obj[key])){
                jsonObj+=`"${key}":[`;
                jsonObj+=`${obj[key]}]`;
            }
            else{
                jsonObj+=`"${key}":{`;
                objectToJSON(obj[key]);
            }
        }
        jsonObj+=",";
    });
    jsonObj = jsonObj.slice(0, jsonObj.length-1);
    jsonObj+="}";
}

let obj = {
    name: "john",
    age: 15,
    id: "123",
    marks: {
        theory: 80,
        practicl: 80,
    },
    num: [1, 2, 3, 4, 5]
};

objectToJSON(obj);

console.log("The Json Object is: " + jsonObj);