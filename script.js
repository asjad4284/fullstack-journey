function check(){
    let counter=0;

    function add(){
        counter++;
    }
    return add
}
const newfunc=check()
newfunc()
newfunc()
