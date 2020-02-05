 findModus = a => {

   // 1st SOLUTION
   // let obj = {};
   // for (let c=0;c<a.length;c++){obj[a[c]] = (obj[a[c]]||0)+1;}
   // let result = Object.keys(obj).filter(el=>obj[el]>1).sort((prev,cur)=>obj[cur]-obj[prev]);
   
   // 2nd & Naive Solution
   const sorting = n => {
       let f = 0;
       for (let min=0, max=0, c=0;c<n.length;c++){ if (n[c]>n[c+1]) { min = n[c+1];
           max = n[c]; n[c]=min; n[c+1]=max; f++}}
       return (f==0) ? n:sorting(n);
   }

   a = sorting(a);
   let occ = 0, cache=0, sum=0;

   for (let n in a) {sum += a[n]}
   if (sum/a.length == a[0]) {return -1}

   for (let c=0;c<a.length;c++) {
      if (a[c] == a[c+1]) {
         cache = a[c];
         occ++
         break;
      }
   }
   
   // return (result.length < 1 || Object.values(obj)==a.length) ? -1:result[0]
   return (occ == 0) ? -1:cache;
 }

 // TEST CASES
console.log(findModus([10, 4, 5, 2, 4]),'Expected 4');
console.log(findModus([5, 10, 10, 6, 5]),'Expected 5');
console.log(findModus([10, 3, 1, 2, 5]),'Expected -1');
console.log(findModus([1, 2, 3, 3, 4, 5]),'Expected 3');
console.log(findModus([7, 7, 7, 7, 7]),'Expected -1');