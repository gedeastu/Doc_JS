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
let version = 17;
//undefined
let until;
//null
let giveUp = null;

//CONDITION LOGICAL
//IF ELSE
if (giveUp == null) {
  giveUp = `Tap outside alert`;
} else {
  giveUp = `i'am Joke!`;
}
//SWITCH
switch (version) {
  case 16.9:
    version = 16.9;
    break;

  case 17:
    version = 17;
    break;

  default: {
    version = `Demo Version`;
  }
}

// EXAMPLE "alert" of source code above
alert(`${desc} with type is ${type} on version ${version} until ${until}, 
Ready? Yes = press "OK" || Ready? No = ${giveUp}`);

// COMBINATION
// "let" variable + alert
let name = `Gede Astu Nugraha`;
alert(`Welcome to the Page ${name}`);

//"let" variable + prompt/alert with "If" condition
let usia = prompt(`when you was born ?`);
let operationAge = 2023 - usia;
if (operationAge < 17) {
  alert(`you're too young`);
} else {
  alert(`you was ${operationAge}`);
}

//"let" variable + prompt/alert with "switch" condition
let inputIncome = prompt(`input your income
Rp.`);
let inputExpend = prompt(`input your expend Rp.`);
const totalSaldo = inputIncome - inputExpend;
switch (totalSaldo) {
  case totalSaldo < 20000:
    alert(`you have ${totalSaldo} please be thrifty`);
    break;
  case totalSaldo > 20000:
    alert(`you have ${totalSaldo} keep it up!!`);
    break;
  default: {
    alert(`You didn't have a saldo lately`);
  }
}
