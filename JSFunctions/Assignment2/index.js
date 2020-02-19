let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// splice(index, no of delete count from the index, ...values to be replaced from index)

arr.splice(0,2);

console.log("deletes first 2 elements");
console.log(arr);

arr = [1, 2, 3, 4, 5, 6, 7, 8];

arr.splice(3, 0, 1, 2, 3);
console.log("inserting elements");
console.log(arr);


arr = [1, 2, 3, 4, 5, 6, 7, 8];
arr.splice(-2, 2, 10, 11);
console.log("replacing the last two elements");
console.log(arr);