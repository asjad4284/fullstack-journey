function display(data){
    console.log("me second")
}

const result=fetch("https://tiktok.com")
result.then(display)


console.log("Me first")