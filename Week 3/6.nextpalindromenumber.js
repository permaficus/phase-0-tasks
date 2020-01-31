nextPalindrome = (val) => {

    let founded = false;
    
    if (val < 9) {return val+1;}

    while (!founded) {
        (val === +val.toString().split('').reverse().join('') ) ? founded = true:val++;
    }

    return val;
}
// TEST CASES
console.log(nextPalindrome(8)); // 9
console.log(nextPalindrome(10)); // 11
console.log(nextPalindrome(117)); // 121
console.log(nextPalindrome(175)); // 181
console.log(nextPalindrome(1000)); // 1001