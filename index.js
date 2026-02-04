let score_el_home=document.getElementById("score-home")
let score_el_guest=document.getElementById("score-guest")

let counter_home=0
let counter_guest=0

function incrementOne_home(){
    counter_home+=1
    score_el_home.innerText=counter_home
}
function incrementTwo_home(){
    counter_home+=2
    score_el_home.innerText=counter_home
}
function incrementThree_home(){
    counter_home+=3
    score_el_home.innerText=counter_home
}


function incrementOne_guest(){
    counter_guest+=1
    score_el_guest.innerText=counter_guest
}
function incrementTwo_guest(){
    counter_guest+=2
    score_el_guest.innerText=counter_guest
}
function incrementThree_guest(){
    counter_guest+=3
    score_el_guest.innerText=counter_guest
}
