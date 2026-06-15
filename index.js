function Workshop(teacher){
    this.teacher=teacher
}

Workshop.prototype.ask=function(question){
    console.log(this.teacher,question)
}

let deepJs=new Workshop("Corey")

deepJs.ask("Can u teach me fundamentals of FastApi?")