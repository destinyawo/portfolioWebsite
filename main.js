let skill = document.getElementById("skills")
let experience = document.getElementById("experience")
let education = document.getElementById("education")

let tab1 = document.getElementById("tab-contents1")
let tab2 = document.getElementById("tab-contents2")
let tab3 = document.getElementById("tab-contents3")



skill.onclick = function(){
    tab1.style.display = ("block")
    tab2.style.display = ("none")
    tab3.style.display = ("none")
    skill.classList.add("active-link")
    experience.classList.remove("active-link")
    education.classList.remove("active-link")
}
experience.onclick = function(){
tab1.style.display = ("none")
tab2.style.display = ("block")
tab3.style.display = ("none")
skill.classList.remove("active-link")
experience.classList.add("active-link")
education.classList.remove("active-link")
}
education.onclick = function(){
    tab1.style.display = ("none")
    tab2.style.display = ("none")
tab3.style.display = ("block")
skill.classList.remove("active-link")
experience.classList.remove("active-link")
education.classList.add("active-link")
}
let open = document.getElementById("open")
let close = document.getElementById("close")
let menu = document.getElementById("menu")

open.onclick = function(){
menu.style.right = "0px"
}
close.onclick = function(){
    menu.style.right = "-150px"
}