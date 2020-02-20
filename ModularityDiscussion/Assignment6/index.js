function printSecondArg() {
    let myArgs = process.argv.slice(2);
    console.log("The Second arguments entered is: ");
    console.log(myArgs[1]);
}

printSecondArg();