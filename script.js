class User{
    #score;
    constructor(name,score){
        this.name=name
        this.#score=score
    }
    increment(){
        this.#score++
    }
}

const user1=new User("Corey",5)
user1.increment()