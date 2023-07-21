const title = document.getElementById("judul")
title.innerHTML = "Hello and Fuck off!"
title.setAttribute('name','judul')
const sectionA = document.querySelector('section#a')
sectionA.innerHTML = "what'are you looking for?";
sectionA.setAttribute("id","anu")
sectionA.getAttribute("id")
sectionA.removeAttribute("id")

const p1 = document.querySelector('#b');
p1.style.color = 'lightblue';
p1.style.backgroundColor = 'green';

const p2 = document.querySelector('.p2');
p2.classList.add("paragraph2")
p2.classList.remove("p2")

const biruMuda = document.querySelector("body")
biruMuda.classList.toggle('BiruMuda')