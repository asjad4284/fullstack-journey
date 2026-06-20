function createFunction(){
    function add2(num){
        return num+2;
    }
    return add2
}

const newFunction=createFunction()
const result=newFunction(3)
console.log(result)