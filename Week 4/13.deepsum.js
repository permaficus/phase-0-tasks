deepSum = l => {

/*     1st Solution
    for (let i=1;i<=l.length-1;i++){ l = [].concat.apply([],l); }
    return l.reduce((a,b)=> a+b); */

    /* in case 1st solution got rejected, this is the 2nd solution */
    // let result = 0;

    // for (let string_ = l.toString().split(','), i=0;i<string_.length;i++) {
    //     result += +string_[i];
    // }

    // Unfortunately above code got rejected, and this is the 3rd and naive solution
    let sum = 0;
    for (let a=0;a<l.length;a++) {
      for (let b=0;b<l[a].length;b++) {
        for (let c=0;c<l[a][b].length;c++)
          sum += l[a][b][c];
      }
    }
    
    return sum;
    // return result;
}

//TEST CASE
console.log(deepSum([
    [
      [4, 5, 6],
      [9, 1, 2, 10],
      [9, 4, 3]
    ],
    [
      [4, 14, 31],
      [9, 10, 18, 12, 20],
      [1, 4, 90]
    ],
    [
      [2, 5, 10],
      [3, 4, 5],
      [2, 4, 5, 10]
    ]
  ])); // 316
  
  console.log(deepSum([
    [
      [20, 10],
      [15],
      [1, 1]
    ],
    [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      [2],
      [9, 11]
    ],
    [
      [3, 5, 1],
      [1, 5, 3],
      [1]
    ],
    [
      [2]
    ]
  ])); // 156
  
  console.log(deepSum([])); // No number