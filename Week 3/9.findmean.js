findMean = data => {return Math.round(data.reduce((a,b) => a+b) / data.length);}

// TEST CASES
console.log(findMean([1, 2, 3, 4, 5])); // 3
console.log(findMean([3, 5, 7, 5, 3])); // 5
console.log(findMean([6, 5, 4, 7, 3])); // 5
console.log(findMean([1, 3, 3])); // 2
console.log(findMean([7, 7, 7, 7, 7])); // 7