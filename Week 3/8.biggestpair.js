biggestPair = (val) => {
    val = val.toString();
    let tmp = [0];
    for (let i=0;i<=val.length-1;i++) {
        (+(val.substr(i,1)+val.substr(i+1,1)) > tmp[0]) ? tmp[0] = +val.substr(i,2):''
    }
    return tmp.toString();
}

// TEST CASES
console.log(biggestPair(641573)); // 73
console.log(biggestPair(12783456)); // 83
console.log(biggestPair(910233)); // 91
console.log(biggestPair(71856421)); // 85
console.log(biggestPair(79918293)); // 99