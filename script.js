function newUser(name,score){
    const user=Object.create(functionstore)
    user.name=name
    user.score=score
    return user
}
const functionstore={
    increment:function(){
        this.score++
    }
}

const user1=newUser("Corey",5)
const user2=newUser("John",10)

user1.increment()
user1.increment()
console.log(user1.score)