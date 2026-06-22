function* createFlow(){
    const res=yield fetch("https;//twitter.com/will/1")
    console.log(res)
}
function printHello(value){
    returnNextElement.next(value)
}

const returnNextElement=createFlow()
const futureData=returnNextElement.next()
futureData.then(printHello)