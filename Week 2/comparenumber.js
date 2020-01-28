compNum = (n1,n2) => {

    return (n2 > n1)? true:((n1==n2)? -1:false);
}

console.log(compNum(10,9)); // false
console.log(compNum(5, 8)); // true
console.log(compNum(5, 3)); // false
console.log(compNum(4, 4)); // -1
console.log(compNum(3, 3)); // -1
console.log(compNum(17, 2)); // false