function printHello(){
    console.log("Hello")
}

function check(){
    // console.log("Me second")
}

setTimeout(printHello,0);
check()
console.log("Me first!")