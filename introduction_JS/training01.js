// TRAINING 01 key(Gunakan alert() dan prompt() pada kedua soal tersebut)

// 1. prompt() untuk mengetahui saldo akhir dari apa yang diinputkan oleh user
let Income = prompt(`Input your Income :
`);
let expends = prompt(`Input your Expend : 
`);
let daysUser = new Date().getDate();
let total = Income - expends;
let bonus;
if(Income > 100000 && expends < 50000){
    bonus= total + 0.20 * total;
    alert(`Congratulations you have total ${bonus}, Keep it up!`);
}else if(Income >= 50000 && expends <20000){
    bonus= total + 0.10 * total;
    alert(`Congratulations you have total ${bonus}, Come on u can more than like that!!`)
}else{
    alert(`it's okay, be struggle!`)
}

// 2. menentukan hari dari tanggal yang ada pada pc/laptop
// note: getDay mengubah hari menjadi number, contoh => senin : 1, selasa : 2, dst
let days = new Date().getDay();
switch(days){
    case 1:
        alert(`today is Senin`);
    break;
    case 2:
        alert(`today is Selasa`);
    break;
    case 3:
        alert(`today is Rabu`);
    break;
    case 4:
        alert(`today is Kamis`);
    break;
    case 5:
        alert(`today is Jum'at`);
    break;
    case 6:
        alert(`today is Sabtu`);
    break;
    case 7:
        alert(`today is Minggu`);
    break;
    default:{
        alert(`please try again`);
    };
};