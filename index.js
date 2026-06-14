class Workshop{
    constructor(teacher){
        this.teacher=teacher;
    }
    ask(question){
        console.log(this.teacher,question);
    }
}
class newClass extends Workshop{
    ask(msg){
        super.ask(msg);
    }
}

var newObject=new newClass("Corey")
newObject.ask("Is this working!")