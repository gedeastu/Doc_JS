let bodyDisplayed = document.body;
console.log(bodyDisplayed);
function ifStarted(){
    let text_btn = document.getElementById(`getStarted`);
    text_btn.textContent = `Please Input Your 
    Username & Password`;
    console.log(text_btn);
    let email = document.createElement(`input`);
    email.setAttribute(`type`,`email`);
    email.setAttribute(`placeholder`,`E-mail`);
    email.style.marginTop = `1rem`;
    email.style.display = `block`;
    bodyDisplayed.appendChild(email);

    let Password = document.createElement(`input`);
    Password.setAttribute(`type`,`Password`);
    Password.setAttribute(`placeholder`,`Password`);
    Password.style.display = `block`;
    bodyDisplayed.appendChild(Password);
    
    let btn_submit = document.createElement(`button`);
    btn_submit.setAttribute(`type`,`submit`);
    btn_submit.textContent = `submit`;
    btn_submit.style.display = `block`
    bodyDisplayed.appendChild(btn_submit);
}

function ifHover(){
    let hideContent = document.getElementById(`text_more`);
    hideContent.style.visibility=`visible`;
    bodyDisplayed.appendChild(desc);
}
function ifNonHover(){
    let descColor = document.getElementById(`text_more`);
    descColor.style.color=`blue`;
}