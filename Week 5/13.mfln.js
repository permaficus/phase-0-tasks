const sorting = n => {
    let f = 0;
    for (let min=0, max=0, c=0;c<n.length;c++){ if (n[c]>n[c+1]) { min = n[c+1];
        max = n[c]; n[c]=min; n[c+1]=max; f++}}
    return (f==0) ? n:sorting(n);
}

function getTotal(arrNumber) {
    // Yeep, NO SPREAD SYNTAX, NO .MAP .REDUCE etc etc......... 
    // let highest = Math.max(...arrNumber);
    // arrNumber = arrNumber.reduce((a,b)=> {a[b]=(a[b]||0)+1; return a},{})
    
    let counter = 0;
    for (let c=0;c<arrNumber.length;c++) {
        counter += (arrNumber[c] == arrNumber[arrNumber.length-1]) ? 1:0;
    }

    return (arrNumber.length==0) ? '' :
        `angka paling besar adalah : ${arrNumber[arrNumber.length-1]} dan jumlah kemunculan sebanyak : ${counter} kali`;

}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}
  
console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''