isPalindrome = str => {return (str == str.split('').reverse().join('')) ? true:false;}

// TEST CASES
console.log(isPalindrome('katak')); // true
console.log(isPalindrome('blanket')); // false
console.log(isPalindrome('civic')); // true
console.log(isPalindrome('kasur rusak')); // true
console.log(isPalindrome('mister')); // false