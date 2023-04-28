// QUESTIONS
// 1. MAKE A MATH OPERATION

// - menghitung luas lingkaran
// Formula : L=3,14*r^2
const LuasLingkaran = (r)=>{
    const pi = 3.14;
    let pow = Math.pow(r,2);
    const operationLuasLingkaran = pi*pow;
    return operationLuasLingkaran;
};
let jariJari = prompt(`Masukan Jari-Jari Lingkaran :`);
alert(
    `Ini adalah Hasil perhitungan Luas Lingkaran ${LuasLingkaran(jariJari)} cm`
);


// - menghitung luas segitiga
//Formula : L = 1/2 * Luas * Tinggi
const LuasSegitiga = (alas,tinggi)=>{
    const half = 1/2;
    const operationLuasSegitiga = half * alas * tinggi;
    return operationLuasSegitiga;
};
let inputAlas = prompt(`Masukan Alas pada segitiga : `);
let inputTinggi = prompt(`Masukan Tinggi pada segitiga : `);
alert(`Ini adalah Hasil perhitungan Luas Segitiga ${LuasSegitiga(inputAlas,inputTinggi)} cm`);


// - menghitung luas persegi panjang
//Formula : L = Panjang * Lebar
const LuasPersegiPanjang = (panjang,lebar)=>{
    operationLuasPersegiPanjang = panjang*lebar;
    return operationLuasPersegiPanjang;
};
let inputPanjang = prompt(`Masukan Panjang pada Persegi Panjang : `);
let inputLebar = prompt(`Masukan Lebar pada Persegi Panjang : `);
alert(`Ini adalah Hasil perhitungan Luas Persegi Panjang ${LuasPersegiPanjang(inputPanjang,inputLebar)} cm`);


// - menghitung luas jajargenjang
const LuasJajarGenjang = (tinggi,alas)=>{
    operationLuasJajarGenjang = tinggi*alas;
    return operationLuasJajarGenjang;
};
let InputTinggi = prompt(`Masukan Tinggi pada Jajar Genjang : `);
let InputAlas = prompt(`Masukan Alas pas Jajar Genjang : `);
alert(`Ini adalah Hasil perhitungan Luas Jajar Genjang ${LuasJajarGenjang(InputTinggi,InputAlas)} cm`);



// 2. COUNT SALARY TOTAL IN A WHOLE MONTH, with input:
// (totalkan gaji perhari dengan jumlah hari kerj)
// - Nama karyawan
// - gaji perhari
// - jumlah hari masuk kerja
const salaryTotal = (daysWork,salaryWork)=>{
    if(daysWork >= 28){
        let bonus = salaryWork * 0.20; 
        return salaryWork + bonus;
    }else{
        let decrement = salaryWork * 0.20;
        return salaryWork - decrement;
    };
};
let nameKaryawan = prompt(`Masukan Nama Karyawan : `);
let DaysWork = prompt(`Masukan Jumlah Hari masuk Kerja : `);
let SalaryWork = prompt(`Masukan Jumlah Salary karyawan : `);
alert(`Total Hasil Gaji Karyawan atas nama ${nameKaryawan} dengan gaji ${salaryTotal(DaysWork,SalaryWork)}`)