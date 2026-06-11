function counter(n){
    return function(){
        return n++;
    }
}

console.log(counter(10))
console.log(counter(11))
console.log(counter(12))