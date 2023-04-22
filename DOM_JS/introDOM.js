// DOM for title in HTML
console.log(document.title); //=> console.log for troubleshooting
let titleDOM = document.title;
titleDOM = 'Intro DOM - Javascript';


// DOM for body in HTML
console.log(document.body); //=> console.log for troubleshooting
let bodyDOM = document.body;

// "append()" is input the content in HTML body and showed the element from HTML
bodyDOM.append(`WHAT'S UP`);

// INPUT VALUE => innerHTML, textContent, innerText
//1. "innerHTMl" (akan menginput atau menyimpan value pada elemen HTML dan fungsi pada elemennya akan bekerja)
let innerHTML = document.createElement(`h1`);
innerHTML.innerHTML = `<marquee>ini pakai innerHTML</marquee>`;
bodyDOM.append(innerHTML);
//2. "textContent" (akan menginput atau menyimpan value menjadi sebuah text)
let textContent = document.createElement('h1');
textContent.textContent = `<marquee>ini pakai textContent</marquee>`;
bodyDOM.append(textContent);
//3. "innerText" (akan menginput atau menyimpan value menjadi text namun dikhususkan untuk utilities text, contohnya: <span>,<strong>,<b>,dll)
let innerText = document.createElement('i');
innerText.innerText = `<marquee>ini pakai textContent</marquee>`;
bodyDOM.append(innerText);

// INPUT ATTRIBUTE => setAttribute(), use this when you want to create img, a, form input, DLL.
let elementAtt = document.createElement(`img`);
elementAtt.setAttribute(`src`,`img/BloonSky.png`);
elementAtt.setAttribute(`width`,`100rem`);
bodyDOM.append(elementAtt);



// ANOTHER EXAMPLE : 
// 1. "append()" with "createElement()"
let intro = document.createElement(`h1`);
intro.innerHTML = `Welcome to the Learning DOM JS`;
bodyDOM.append(intro);
let content = document.createElement(`p`);
content.innerHTML = `My name is Gede Astu Nugraha`;
bodyDOM.append(content);
let visitLink = document.createElement(`a`);
visitLink.setAttribute(`href`,`#`);
visitLink.innerHTML = `visit`;
bodyDOM.append(visitLink);



