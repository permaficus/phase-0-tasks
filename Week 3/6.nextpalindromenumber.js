nextPalindrome = (val) => {

    let founded = false;
    
    if (val < 9) {return val+1;}

    const revNum = num => {
        num = String(num);
        let rev = ''
        for (let n=1;n<=num.length;n++){
            rev += num.substr(num.length-n,1);
        }

        return +rev;
    }

    while (!founded) {
        (val === revNum(val) ) ? founded = true:val++;
    }

    return val;
}
// TEST CASES
console.log(nextPalindrome(8),'Expected Value : 9');
console.log(nextPalindrome(10),'Expected Value : 11');
console.log(nextPalindrome(117),'Expected Value : 121');
console.log(nextPalindrome(175), 'Expected Value : 181');
console.log(nextPalindrome(1000),'Expected Value : 10001');