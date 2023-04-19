// BASIC ARRAY
let playerNBA = [
    `giannis`,`luka`,`LeBron`,`Jayson`
];
alert(`just one player ${playerNBA[3]}`);


// .push
// how to add new value of array? use ".push" 
// before with ".push" : `giannis`,`luka`,`LeBron`,`Jayson`
//  after with ".push" : `giannis`,`luka`,`LeBron`,`Jayson`,`Davis`,`Curry`,`Durant`
playerNBA.push(`Davis`,`Curry`,`Durant`);
alert(`new player ${playerNBA}`);


// .shift
// how to delete value with started to front of array? use ".shift"
// before with ".shift" : `giannis`,`luka`,`LeBron`,`Jayson`,`Davis`,`Curry`,`Durant`
// after with ".shift" : `luka`,`LeBron`,`Jayson`,`Davis`,`Curry`,`Durant`
playerNBA.shift();
alert(`replace player forward ${playerNBA}`);


//.pop
// how to delete value with started to behind of array? use ".pop"
// before with ".pop" : `giannis`,`luka`,`LeBron`,`Jayson`,`Davis`,`Curry`,`Durant`
// after with ".pop" : `giannis`,`luka`,`LeBron`,`Jayson`,`Davis`,`Curry`
playerNBA.pop();
alert(`replace player backward ${playerNBA}`);
