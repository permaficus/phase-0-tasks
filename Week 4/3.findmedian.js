findmedian = arr => {

    // FORMULA : (Xn/2+Xn/2-1)/2 (ODD) && (Xn-1)/2 (EVEN)
    
    // if rejected
    arr.sort((a,b)=>a-b)
    
    // use below
    const sorting = n => {
        let f = 0;
        for (let min=0, max=0, c=0;c<n.length;c++){ if (n[c]>n[c+1]) { min = n[c+1];
            max = n[c]; n[c]=min; n[c+1]=max; f++}}
        return (f==0) ? n:sorting(n);
    }
    
    arr = sorting(arr);

    return arr.length%2 == 0 ? (arr[arr.length/2]+arr[arr.length/2-1])/2 : arr[(arr.length-1)/2]

}

// TEST CASES
console.log(findmedian([1, 2, 3, 4, 5]),'Expected 3');
console.log(findmedian([1, 3, 4, 10, 12, 13]),'Expected 7'); 
console.log(findmedian([3, 4, 7, 6, 10]),'Expected 6 not 7');
console.log(findmedian([1, 3, 3]),'Expected 3');
console.log(findmedian([7, 7, 8, 8]),'Expected 7.5');