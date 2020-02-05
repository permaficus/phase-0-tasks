checkAB = str => {

    // 1st Solution and got rejected, again
    // return (str.lastIndexOf('b') - str.indexOf('a')>=2) ? true:false;

    // 2nd solution
    let range = 0;
    for (let c=0;c<str.length;c++) {
        if (str[c] == 'a' && str[c+4] == 'b' || str[c+1] == 'b') {
            range++
        }
    }

    return (range > 0) ? true:false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false