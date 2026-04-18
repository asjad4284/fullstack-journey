function newUser(name,score){
    const user={}
    user.name=name
    user.score=score
    user.increment=function(){
        user.score++
    }
    return user
}

const user1=newUser("Corey",5)
const user2=newUser("John",10)

user1.increment()
console.log(user1.score)