function printHello(){
    return "Me Third"
}


async function createFlow() {
    console.log("Async is about to start!!!")
    const data=await printHello()
    console.log(data)
    console.log("Async has ended!!!")
}

console.log("Me first!!")
createFlow()
console.log("Me Second!")