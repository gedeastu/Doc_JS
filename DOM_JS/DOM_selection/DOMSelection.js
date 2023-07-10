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
// querySelector() -> element
// querySelectorAll() -> nodeList
