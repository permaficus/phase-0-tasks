findmedian = arr => {

    // FORMULA : (Xn/2+Xn/2-1)/2 (ODD) && (Xn-1)/2 (EVEN)
    
    arr.sort((a,b)=>a-b)
    return arr.length%2 == 0 ? (arr[arr.length/2]+arr[arr.length/2-1])/2 : arr[(arr.length-1)/2]

}

// TEST CASES
console.log(findmedian([1, 2, 3, 4, 5]),'Expected 3');
console.log(findmedian([1, 3, 4, 10, 12, 13]),'Expected 7'); 
console.log(findmedian([3, 4, 7, 6, 10]),'Expected 6 not 7');
console.log(findmedian([1, 3, 3]),'Expected 3');
console.log(findmedian([7, 7, 8, 8]),'Expected 7.5');