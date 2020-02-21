/*
Function angkaPrimaRange adalah function menerima angka dan memiliki 
ouput array berisi angka-angka perima sebelum angka tersesbut
cobalah kerjakan soal ini dengan modular function 

Rules : 
Dilarang menggunakan built-in function selain .push()
*/

function angkaPrima(angka) {
    // your code here
    let result = [];
    const isPrime = n => {
        for (let i=2;i<n;i++) {if (n%i==0) return false;}
        return true;
    }

    for (let x=1;x<angka;x++) {
        if (isPrime(x)) 
            result.push(x);
    }
    return result;
}

function angkaPrimaRange(num) {
    // your code here
    return angkaPrima(num);
}

// TEST CASES
console.log(angkaPrimaRange(6)); // [ 1, 2, 3, 5 ]
console.log(angkaPrimaRange(33)); // [ 1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31 ]