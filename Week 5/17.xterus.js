xterus = n => {
    // zzz...zzz....zzz
    // n = eval(String(n).split('').join('*'));
    let sum = 1;
    n = n.toString();
    for (let i=0;i<n.length;i++) {sum *= +n[i]}
    return (sum > 9 ) ? xterus(sum):sum;
}

// TEST CASES
console.log(xterus(66),'Expected 8');
console.log(xterus(3),'Expected 3'); 
console.log(xterus(24),'Expected 8'); 
console.log(xterus(654),'Expected 0'); 
console.log(xterus(1231),'Expected 6'); 
