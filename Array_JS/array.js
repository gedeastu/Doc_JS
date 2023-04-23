// ARRAY STANDAR
// Example Syntax => const VariableName = [index[0],index[1],index[2],dst];
// Example Code :
const MyArray = [`Tatum`,`Giannis`,`James`,`Brown`];

//ARRAY OBJECT
// Example Syntax => const VariableName = new Array (index[0],index[1], index[2],dst); 
// Example Code :
const Player = new Array(`Haaland`,`Messi`,`Ronaldo`,`Mbappe`);
console.log(Player[1]);

//MULTIDIMENTION ARRAY
const bookType = new Array((`Novel`,`Comic`),(`Note`,`News`));
console.log(bookType[1][0]);


// Displayed with console.log()
//1. Menampilkan semua isi array hingga angka indexnya
console.log(MyArray);
//2. Menampilkan satu value saja dalam  array
console.log(MyArray[2]);
//3. Menampilkan panjang dari array
console.log(MyArray.length);
//4. Menampilkan value dengan String Key
const edu = new Array();
edu[`Programming`] = [`💻`];
edu[`Science`] = [`💊`];
edu[`Attitude`] = [`💡`];
console.log(`Your Favorite Education is ${edu[`Programming`]}`);


// EDITING THE ARRAY
//1. .push
// how to add new value of array? use ".push" 
// before with ".push" : `Tatum`,`Giannis`,`James`,`Brown`
//  after with ".push" : `Tatum`,`Giannis`,`James`,`Brown`,`Davis`,`Curry`,`Durant`
MyArray.push(`Davis`,`Curry`,`Durant`);
alert(`new player ${MyArray}`);


//2. .shift
// how to delete value with started to front of array? use ".shift"
// before with ".shift" : `Tatum`,`Giannis`,`James`,`Brown`,`Davis`,`Curry`,`Durant`
// after with ".shift" : `Giannis`,`James`,`Brown`,`Davis`,`Curry`,`Durant`
MyArray.shift();
alert(`replace player forward ${MyArray}`);


//3. .pop
// how to delete value with started to behind of array? use ".pop"
// before with ".pop" : `Tatum`,`Giannis`,`James`,`Brown`,`Davis`,`Curry`,`Durant`
// after with ".pop" : `Tatum`,`Giannis`,`James`,`Brown`,`Davis`,`Curry`
MyArray.pop();
alert(`replace player backward ${MyArray}`);


// MEMANGGIL VALUE FUNCTION DI DALAM ARRAY
const player = new Array(
    {Name: function(){
       console.log(`Klay Jackson`); 
    }},
    {Weapon: function(){
        console.log(`🗡️`);
    }},
    {Gender: function(){
        console.log(`Male`);
    }}
);
//1.with console.log
console.log(`Ini hasil dari console.log() => ${player[1].Weapon}`);
//2. without console.log
player[1].Weapon();


// MENGETAHUI TYPE ISI DALAM ARRAY
//includes(`value`);
const Game = new Array(`LOL`,`NBA2k`,`PES`,`FIFA`,);
let showedGame = Game.includes(`NBA2k`);
console.log(showedGame);

//MENGETAHUI URUTAN VALUE PADA ARRAY
// indexOf(`value`)
let indexGame = Game.indexOf(`PES`);
console.log(indexGame);

// MENGETAHUI URUTAN SEBELUM DAN SESUDAH INDEX
let indexBefore = indexGame - 1;
let indexAfter = indexGame + 1;
const before = Game[indexBefore];
const after = Game[indexAfter];
console.log(`URUTAN SEBELUM ${Game[2]} ADALAH ${before}`);
console.log(`URUTAN SETELAH ${Game[2]} ADALAH ${after}`);

// MENGETAHUI URUTAN AWAL PADA VALUE ARRAY
// .shift()
const FirstGame = Game.shift();
console.log(`Game Pertama adalah ${FirstGame}`);

//MENGETAHUI URUTAN TERAKHIR PADA VALUE ARRAY
// .pop()
const LastGame = Game.pop();
console.log(`Game Terakhir adalah ${LastGame}`);

// MENGCOPY SEBUAH ARRAY DAN TIDAK DAPAT MENGEDIT ARRAY ORIGINALNYA
// ARRAY ORGINAL
const IconEdu = [`💻`,`🤖`,`science`,`📊`];
console.log(`Orginal Array => ${IconEdu}`);
//1. spread operator => [...NamaArrayOrginal];
let copySpread = [...IconEdu];
copySpread[2] = `💊`;
console.log(`Copy Array with Spread Operator(...) => ${copySpread}`);
//2. .slice() => NamaArrayOriginal.slice();
let copySlice = IconEdu.slice();
copySlice[2] = `💊`;
console.log(`Copy Array with .slice() => ${copySlice}`);
//3. Array.from() => Array.from(NamaArrayOriginal)
let copyArrayFrom = Array.from(IconEdu);
copyArrayFrom[2] = `💊`;
console.log(`Copy Array with Array.from() => ${copyArrayFrom}`);
//4. JSON.parse(JSON.stringify()) => JSON.parse(JSON.stringify(NamaArrayOriginal))
let copyWith_JSONUtil = JSON.parse(JSON.stringify(IconEdu));
copyWith_JSONUtil[2] = `💊`;
console.log(`Copy Array with JSON.parse(JSON.stringify()) => ${copyWith_JSONUtil}`);



// COMBINATION ARRAY
//1. includes() & indexOf() with if()else condition and assign the AFTER & BEFORE position
const car = new Array(`BMW`,`AVANZA`,`XENIA`,`FORTUNER`);
let showedCar = car.includes(`BMW`);
if(showedCar === true){ 
    let indexCar = car.indexOf(`AVANZA`);
    let IndexAfter = indexCar + 1;
    let IndexBefore = indexCar - 1;
    const BeforeCar = car[IndexBefore];
    const AfterCar = car[IndexAfter]; 
    console.log(`Posisi Mobil itu adalah ${indexCar} dengan Urutan Setelah ${AfterCar} dan Sebelum ${BeforeCar}`);
}else{
    console.log(`Posisi Mobil itu tidak ditemukan, Coba Lagi!`);
}


