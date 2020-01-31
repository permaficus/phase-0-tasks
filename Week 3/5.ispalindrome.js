isPalindrome = str => {

    // return (str == str.split('').reverse().join('')) ? true:false;
    let revWord = '';
    for (let i=1;i<=str.length;i++){revWord += str.substr(str.length-i,1)}
    return (str == revWord) ? true:false;
    
}

// TEST CASES
console.log(isPalindrome('katak')); // true
console.log(isPalindrome('blanket')); // false
console.log(isPalindrome('civic')); // true
console.log(isPalindrome('kasur rusak')); // true
console.log(isPalindrome('mister')); // false