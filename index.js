function createFlow(array){
    let i=0;
    const inner={next:
        function(){
            const element=array[i];
            i++;
            return element
        }
    }
    return inner;
}

const retrunNextElement=createFlow([4,5,6])
const element1=retrunNextElement.next()
const element2=retrunNextElement.next()
console.log(element1)
console.log(element2)