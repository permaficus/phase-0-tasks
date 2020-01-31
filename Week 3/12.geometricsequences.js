isGeometric = (data) => {

    let commonRatio = data[1]/data[0];
    
    // return (data.reduce((a,b,c)=>{let t = b/data[c-1];return (a<b)?t
    //     :undefined})==data[1]/data[0]) ? true:false;

    for (let g=2;g<data.length;g++) {
        if (data[g]/data[g-1] !== commonRatio) { return false;}
    }

    return true;
}

// TEST CASES
console.log(isGeometric([1, 3, 9, 27, 81]),'Expected true');
console.log(isGeometric([2, 4, 8, 16, 32]),'Expected true');
console.log(isGeometric([2, 4, 6, 8]), 'Expected false');
console.log(isGeometric([2, 6, 18, 54]),'Expected true');
console.log(isGeometric([1, 2, 3, 4, 7, 9]), 'Expected false');