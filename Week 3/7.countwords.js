countWords = str => {return str.match(/\w+/g).length;}

// TEST CASES
console.log(countWords('I have a dream')); // 4
console.log(countWords('Never eat shredded wheat or cake')); // 6
console.log(countWords('A song to sing')); // 4
console.log(countWords('I')); // 1
console.log(countWords('I believe I can code')); // 5