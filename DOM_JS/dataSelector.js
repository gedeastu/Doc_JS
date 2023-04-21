let titlePage = document.title;
titlePage = `Data Selector DOM - JavaScript`;
console.log(titlePage);

let bodyPage = document.body;

let titleH1 = document.createElement(`h1`);
titleH1.innerHTML = `Data Selector DOM`;
bodyPage.append(titleH1);

// MEMANGGIL ID ELEMENT DARI FILE HTML MENGGUNAKAN `document.getElementById()`
let with_getElementById = document.getElementById(`btn_submit`);

//BAHKAN DAPAT MEMANGGIL ELEMENT DI HTML SECARA UNIV ( ID or CLASS ), DENGAN GUNAKAN `document.querySelector()`
let with_querySelector = document.querySelector(`#btn_reload`);

//SERTA DAPAT MENGEDIT ELEMENTNYA DENGAN `.style.utilitiesCSS`
with_getElementById.style.padding=`0.5rem`;
with_getElementById.style.width=`10rem`;
with_getElementById.style.borderColor =`gray`;
with_getElementById.style.backgroundColor = `cyan`;
with_getElementById.style.borderRadius=`1rem`;

with_querySelector.style.padding=`0.5rem`;
with_querySelector.style.width=`10rem`;
with_querySelector.style.borderColor =`gray`;
with_querySelector.style.backgroundColor = `blue`;
with_querySelector.style.borderRadius =`1rem`;
with_querySelector.style.color = `white`;


