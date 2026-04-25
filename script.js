class User{
    constructor(name,score){
        this.name=name
        this.score=score
    }
    increment(){
        this.score++
    }
}

const user1=new User("Corey",5)
user1.increment()
console.log(user1.score)