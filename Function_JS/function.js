// FUNCTION JS

// STANDAR
// first example is STANDAR FUNCTION JS
function addName(firstName,lastName){
    let fullName = `${firstName} ${lastName}`;
    return fullName;
};
alert(addName(`Gede Astu`,`Nugraha`));


// NEW FUNCTION
const games = new Function(
    `nameGame`,
    `releaseDate`,
    `rateGame`,
    `return nameGame + releaseDate + rateGame;`
) 
alert(games(`League Of Legends`,`2016`,`8.90`));


// IN VARIABLE
const cars = function car(nameCar,typeCar){
    let myCar = nameCar + typeCar;
    return myCar;
}
alert(cars(`GTR3000`,`BMW`));


//ARROW FUNCTION
const playerNBA = (Name,Postion,Points) => {
    return Name + ` ` + Postion + ` ` + Points;
}
alert(playerNBA(`Jayson Tatum`,`Small Forward`,`680pts`));


//Utilities of JS
//1. arguments
//arguments standar
function theAddress(){
    console.log(`your city :`,arguments[0]);
    console.log(`your Island :`,arguments[1]);
};
alert(theAddress('Gianyar City','Bali Island'));

//arguments with looping
function player(){
    for(let i=0;i < arguments.length;i++){
        return arguments[i];
    }
};
alert(player(`Giannis`,`Chris Paul`,`Irving`));