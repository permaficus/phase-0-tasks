numberGrouping = arr => {

    let grouped = [[],[],[]];
    for (let i=0;i<=arr.length-1;i++) {

        (arr[i]%2==0 && arr[i]%3!==0) ? grouped[0].push(arr[i]):
            ((arr[i]%2==1 && arr[i]%3!==0)? grouped[1].push(arr[i]):grouped[2].push(arr[i]));

    }

    return grouped;

}

// TEST CASES
console.log(numberGrouping([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(numberGrouping([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(numberGrouping([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(numberGrouping([])); // [ [], [], [] ]
console.log(numberGrouping([45, 20, 21, 2, 7]))