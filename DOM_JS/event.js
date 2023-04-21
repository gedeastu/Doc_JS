// EVENT IN JS, bisa dengan Function,IF,Switch,ForLoop,DLL 
function changesColor(){
    let eventJS = document.getElementById(`btn_eventJS`);
    eventJS.style.backgroundColor=`blue`;
    eventJS.style.color=`white`;
}

// MOUSE EVENT IN JS, bisa dengan Function,IF,Switch,ForLoop,DLL
function ChangesColor(){
    let mouseEventJS = document.getElementById(`btn_mouseEventJS`);
    mouseEventJS.style.backgroundColor=`blue`;
    mouseEventJS.style.color=`white`;
}
function ChangesText(){
    let mouseEventJS = document.getElementById(`btn_mouseEventJS`);
    mouseEventJS.textContent = `What's UP!`;
}

function DefaultText(){
    let defaultText = document.getElementById(`btn_mouseEventJS`);
    defaultText.textContent = `button with function JS`;
    let defaultStyle = document.getElementById(`btn_mouseEventJS`);
    defaultStyle.style.backgroundColor = `white`;
    defaultStyle.style.color = `black`;
}