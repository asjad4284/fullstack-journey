async function check() {
    console.log("Me second")
    const result=await "Me fifth"
    console.log("Me fourth")
    console.log(result)
}
console.log("Me first")
check()
console.log("Me third")