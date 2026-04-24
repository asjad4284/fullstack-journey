function newUser(name,score){
    const user=Object.create(userFunction)
    user.name=name
    user.score=score
    return user
}

const userFunction={
    increment:function(){
        this.score++
    }
}


const user1=newUser("Corey",5)
const user2=newUser("John",10)

user1.increment()
user2.increment()

console.log(user1.score)
console.log(user2.score)
console.log(user1.hasOwnProperty("score"))