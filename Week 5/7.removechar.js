removeChar = str => {return str.replace(/[^a-zA-Z0-9]/g,'')}

// TEST CASES
console.log(removeChar('test%$4aa')); // test4aa
console.log(removeChar('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(removeChar('ma@#k!an~')); // makan
console.log(removeChar('coding')); // coding
console.log(removeChar('1+3-5*2=100')); // 1352100