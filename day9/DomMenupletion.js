let title = document.getElementById('title');
let background = document.querySelector('.background');
let nav = document.querySelector(".nav")
let img = document.querySelector(".img")
let btn = document.querySelector(".btn")

let classList  = document.querySelector(".classList")
console.log(`========task 1 ========`);
title.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elitnis consequuntur!';

console.log(`========task 2 ========`);
background.style = "background-color: red";

console.log(`========Activity2:creating append element ========`);

let fregment = document.createDocumentFragment()
console.log(`========task 3 ========`);

let div = fregment.appendChild(document.createElement("div")).appendChild(document.createElement("h1"))

div.textContent = "hello world"

document.body.appendChild(fregment)

let list = document.createElement("ul")

const li =list.appendChild(document.createElement("li"))

li.innerHTML = "Home",
document.body.appendChild(list)


console.log(`===========Activity3 Removing element==============`)

console.log(`============task 5==========`)
title.remove()

console.log(`==========task 6=============`)
nav.removeChild(nav.lastElementChild);


console.log(`===============Activity 4============`)

console.log(`==========task 7 ==========`)

img.src = "https://imgs.search.brave.com/GVcDP9cX1YLhjAXS0-gIVZzpPpmCYLlsOHfwIOt7VfU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/dHdvLXRvbmUtaW5r/LWNsb3VkLmpwZz93/aWR0aD0xMDAwJmZv/cm1hdD1wanBnJmV4/aWY9MCZpcHRjPTA"

console.log(`============ task 8 ===========`)

classList.classList.add("ADDED")
classList.classList.remove("REMOVED")

console.log(`============ Activity 5 ===========`)
console.log(`============ task 9 ===========`)
const para = document.querySelector(".para")

btn.addEventListener("click", function(){
    let para = document.querySelector(".para")
    para.innerHTML= "hello world"
})



console.log(`============ task 10 ===========`)
para.addEventListener("mouseover", function(){
    para.style = "border: 1px solid red"
})
para.addEventListener("mouseout", function(){
    para.style = "border: none"
})





