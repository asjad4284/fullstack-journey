function printHello(){
    return "Me Third"
}


async function createFlow() {
    console.log("Async is about to start!!!")
    const data=await printHello()
    console.log(data)
    console.log("Async has ended!!!")
}

createFlow()
console.log("Me first")
console.log("Me Second")