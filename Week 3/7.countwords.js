countWords = str => {

    // 1st VERSION
    // return str.match(/\w+/g).length;
    
    // 2nd VERSION
    let count = 1;
    for (let c in str) {
        if (str[c]===' ') {
            count++
        }
    }

    return count;
}

// TEST CASES
console.log(countWords('I have a dream')); // 4
console.log(countWords('Never eat shredded wheat or cake')); // 6
console.log(countWords('A song to sing')); // 4
console.log(countWords('I')); // 1
console.log(countWords('I believe I can code')); // 5