function ask(question){
    console.log(this.teacher,question)
}

function otherFunction(){
    var context={
        teacher:"John",
    };
    ask.call(context,"Why is this happening?")
}

otherFunction()