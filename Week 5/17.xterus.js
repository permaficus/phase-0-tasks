xterus = n => {

    n = eval(String(n).split('').join('*'));
    return (n > 9 ) ? xterus(n):n;
}

// TEST CASES
console.log(xterus(66),'Expected 8');
console.log(xterus(3),'Expected 3'); 
console.log(xterus(24),'Expected 8'); 
console.log(xterus(654),'Expected 0'); 
console.log(xterus(1231),'Expected 6'); 
