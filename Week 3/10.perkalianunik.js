perkalianUnik = a => {

    // return arr.map((a)=> arr.reduce((b,c)=>b*c,1)/a)

    let ob = [], res = 1;
    for (let i in a) {res*=a[i]};
    for (let r in a) {ob.push(res/a[r])};

    return ob;
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6]),[24, 12, 8]); 
console.log(perkalianUnik([1, 2, 3, 4, 5]),[120, 60, 40, 30, 24]); // 
console.log(perkalianUnik([1, 4, 3, 2, 5]),[120, 30, 40, 60, 24]); // 
console.log(perkalianUnik([1, 3, 3, 1]),[9, 3, 3, 9]); // 
console.log(perkalianUnik([2, 1, 8, 10, 2]),[160, 320, 40, 32, 160]); // 