function ask(question){
    console.log(this.teacher,question)
}

var workshop1={
    teacher:"Corey",
    ask:ask,
};


var workshop2={
    teacher:"John",
    ask:ask,
};

workshop1.ask("How can we solve this problem!")
workshop2.ask("How can we solve this problem!")