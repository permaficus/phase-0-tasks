/**
 * Instruksi
 *
 * ===============
 * Count Stuff
 * ===============
 *
 * Pada program ini kalian harus mencari beberapa hal yang terdapat di dalam sebuah string.
 * Kalian diberikan 2 input, 'line' dan 'param'.
 * String line berisi angka (0-9), huruf (lowercase) atau karakter lain yang sembarang ('/', '#', '@', '$', dll). String ini merupakan string yang akan kalian proses.
 * Contoh line: '123abcdfghi9657$%^&*'
 * String param berisi parameter yang akan menentukan barang yang kalian cari di dalam string tersebut.
 * param bisa berupa: - 'sigma'
 *                         jika param berupa sigma, maka jumlahkan semua angka di dalam string.
 *                     - 'letters'
 *                         jika param berupa letters, maka carilah jumlah huruf di dalam string.
 *                     - 'length'
 *                         jika param berupa length, maka program akan mengoutput panjang dari elemen string yang berupa huruf dan angka.
 *                     - Selain ketiga param diatas, maka program akan mengoutput 'Parameter salah'
 * Contoh
 *
 * 1.
 * 'line' : 'abcdefghijklmonjasd'
 * 'param': 'letters'
 *
 * Output: 19
 *
 * 'line': 'abcdefghijklmonjasd'
 * 'param': 'sigma'
 *
 * Output: 0
 *
 * 'line': 'abcdefghijklmonjasd'
 * 'param': 'length'
 *
 * Output: 19
 *
 * 2. line: 'abcde12345
 *
 * param : 'sigma'
 *
 * Output: 15
 *
 * line: 'abcde12345
 *
 * param : 'length'
 *
 * Output: 10
 *
 * RULES :
 * - HANYA BOLEH MENGGUNAKAN BUILT-IN METHOD / FUNCTION dari tipe data Number
 *
 */
var line = 'abcde328331093' //kalian bisa mengubah isi dari 'line' untuk menguji contoh-contoh string yang lainnya
var param = 'letter' //kalian bisa mengisi param ini dengan 'sigma', 'letters', 'length', dll

//tulis kode kalian disini

countSomething = () => {

    // const an = [0,1,2,3,4,5,6,7,8,9]
    // const words = 'abcdefghijklmnopqrstuvwxyz'
    // let c = 1, sum = 0;

    // const sigma = str => {
    //     for (let i=0;i<str.length;i++) {  
    //     sum += (an.includes(+str[i])>0) ? an[+str[i]]:0}
    //     return sum;
    // }

    // const letter = str => {
    //     for (let i=0;i<= str.length; i++) {c += (words.indexOf(str[i])>0) ? 1:0;}
    //     return c;
    // }

    // const len = str => {return str.length;}

    // return (param == 'sigma') ? sigma(line):((param == 'letter') ? letter(line):len(line));

    return (param == 'sigma') ? eval(line.match(/\d/g).join('+')):((param == 'letter')
            ? line.match(/([a-zA-Z])/g).length : line.length)

}

console.log(countSomething())