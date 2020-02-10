
let count = (i) => {
    i++;
    if(i<=100){
        console.log(i);
        return count(i);
    }
}
count(0);
