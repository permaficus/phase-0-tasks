findMean = data => {

    // return Math.round(data.reduce((a,b) => a+b) / data.length);
    let sum = 0;
    for (let n in data) {sum += data[n]}
    return Math.round(sum/data.length);
}

// TEST CASES
console.log(findMean([1, 2, 3, 4, 5]),'Expected Val : 3');
console.log(findMean([3, 5, 7, 5, 3]),'Expected Val : 5');
console.log(findMean([6, 5, 4, 7, 3]),'Expected Val : 5');
console.log(findMean([1, 3, 3]),'Expected Val : 2');
console.log(findMean([7, 7, 7, 7, 7]),'Expected Val : 7');