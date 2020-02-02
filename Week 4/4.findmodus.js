 findModus = a => {

    let obj = {};

    for (let c=0;c<a.length;c++){obj[a[c]] = (obj[a[c]]||0)+1;}
    let result = Object.keys(obj).filter(el=>obj[el]>1).sort((prev,cur)=>obj[cur]-obj[prev]);
    
    return (result.length < 1 || Object.values(obj)==a.length) ? -1:result[0]

 }

 // TEST CASES
console.log(findModus([10, 4, 5, 2, 4]),'Expected 4');
console.log(findModus([5, 10, 10, 6, 5]),'Expected 5');
console.log(findModus([10, 3, 1, 2, 5]),'Expected -1');
console.log(findModus([1, 2, 3, 3, 4, 5]),'Expected 3');
console.log(findModus([7, 7, 7, 7, 7]),'Expected -1');