
let count = (i) => {
    i++;
    if(i<=100){
        console.log(i);
        count(i);
    }
}
count(0);
