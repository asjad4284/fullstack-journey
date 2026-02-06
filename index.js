// chrome://extensions/
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

let leadFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))
if(leadFromLocalStorage){
    myLeads=leadFromLocalStorage
    renderLeads()
}

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    // Setting data to localStorage
    localStorage.setItem("myLeads",JSON.stringify(myLeads))

    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}
