// ALERT
// for pop up chat 
// alert(`What's UP`);

// CONSOLE.LOG
// for displayed the value in console
// console.log(`Hello World`);

// // PROMPT
// // it will pop up but would to showed the input
// prompt(`input your age : `)


// VARIABLE in JS
// type "let" is good when you wanna make a variable and you could to changes a new value on this variable
// let age = 18;
// console.log(`hi, you're too young ${age}`)

// type "const" is good when wanna make the variable with a absolute value
// note: "const" is doesn't changes the value if you did 
// const yourAge = 10;
// yourAge = 20;
// console.log(`hi, you're too young ${yourAge}`)

// type "var" is often used when you've learned about object JS but is doesn't really good for make a variable
// var Age = 12;
// console.log(`hi, you're too young ${Age}`);


// DATA TYPE IN JS
// String
let desc = `This step we're gonna learn about JS `;
// integer
let type = 16;
// float
let version = 16.9;
//undefined
let until;
//null
let giveUp = null;
// example of data type above
alert(`${desc} with type is ${type} on version ${version} until ${until}, 
Ready? Yes = press "OK" || Ready? No = ${giveUp}`);




// COMBINATION
// "let" variable + alert
let name = `Gede Astu Nugraha`;
alert(`Welcome to the Page ${name}`);

//"let" variable + prompt/alert with "If" condition
let usia = prompt(`when you was born ?`);
let operationAge = 2023 - usia;
if(operationAge < 17){
    alert(`you're too young`);
}else{
    alert(`you was ${operationAge}`);
}

