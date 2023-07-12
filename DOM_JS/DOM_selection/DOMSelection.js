// DOM Selection Method :
// getElementById() -> element
const Judul = document.getElementById("judul");
Judul.style.color = 'white';
Judul.style.backgroundColor = '#F7A300';
Judul.innerHTML = 'Hello My User! 👋';

// getElementsByTagName() -> HTML Collection
const p = document.getElementsByTagName("p");
for (let i = 0; i <= p.length; i++){
    if(i % 2 == 0){
        p[i].style.backgroundColor = '#378F17';
        p[i].style.color = "white";
        console.log(i);
    }
}

// getElementsByClassName() -> HTML Collection
const p1 = document.getElementsByClassName("p1");
for (let i = 0; i <= p1.length;i++){
    if(i%2 == 0){
        p1[i].style.backgroundColor = "#89D96D";
        p1[i].innerHTML = "This's your result";
    }
}
// querySelector() -> element
const selector = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.backgroundColor = 'green';
// querySelectorAll() -> nodeList


//Change Node Root
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
p4.style.color = "red";