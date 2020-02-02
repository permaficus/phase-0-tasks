digitMinimum = n => {

    let cache = n, val = '';

    if (n < 9 ) {return 2}

    for (let i=1;i<n;i++){
        if (n%i===0){
            val = `${i}${n/i}`;
            if (val.length < cache) {cache = val.length}
        }
    }

    return cache;

}

// TEST CASES
console.log(digitMinimum(24),'Expected 2');
console.log(digitMinimum(90),'Expected 3');
console.log(digitMinimum(20),'Expected 2');
console.log(digitMinimum(179),'Expected 4');
console.log(digitMinimum(1),'Expected 2');