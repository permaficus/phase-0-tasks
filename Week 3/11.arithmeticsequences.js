isArithmetic = data => {

    // FORMULA = a(n0) + (target - 1) * diff (n1-n0) -
    // 1st VERSION
    // ((data[0] + (data.length-1) * (data[1]-data[0]))==data.pop()) ? true:false;

    // 2nd VERSION
    for (let i=1;i<data.length-1;i++){
        if ((data[0] + ((i+2) - 1) * (data[1]-data[0]))!==data[i+1]) {return false;}
    }
    return true;

}

// TEST CASES
console.log(isArithmetic([1, 2, 3, 4, 5, 6])); // true
console.log(isArithmetic([2, 4, 6, 12, 24])); // false
console.log(isArithmetic([2, 4, 6, 8])); // true
console.log(isArithmetic([2, 6, 18, 54])); // false
console.log(isArithmetic([1, 2, 3, 4, 7, 9])); // false