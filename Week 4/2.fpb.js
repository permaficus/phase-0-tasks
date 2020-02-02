fpb = (a,b) => {

    let res = 0;
    for (let c = 1; c < b;c++){
        
        if (a%c == 0 && b%c ==0){ res = c }
    
    }

    return res;
}

console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1