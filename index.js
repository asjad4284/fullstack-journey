function* createFlow(){
    const num=10;
    const newNum=yield num;
    yield 5+newNum;
    yield 8
}

const returnNextElement=createFlow()
const element1=returnNextElement.next().value
const element2=returnNextElement.next(2).value
const element3=returnNextElement.next().value
console.log(element1)
console.log(element2)
console.log(element3)