digitMinimum = n => {

    let cache = n, val = '';
    for (let i=1;i<n;i++){

        if (n%i===0){
            val = `${i}${n/i}`;
            if (val.length < cache) {cache = val.length}
        }

    }

    return cache;

}

// TEST CASES
console.log(digitMinimum(24)); // 2
console.log(digitMinimum(90)); // 3
console.log(digitMinimum(20)); // 2
console.log(digitMinimum(179)); // 4
console.log(digitMinimum(1)); // 2