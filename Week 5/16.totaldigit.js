calculateMe = n => {

    //val = eval(String(val).split('').join('+'));
    return (n.toString().length <= 1) ? +n:+(n.toString()[0]) + calculateMe(+(n.toString().slice(1))) 
}

// TEST CASES
console.log(calculateMe(512),'Expected 8');
console.log(calculateMe(1542),'Expected 12');
console.log(calculateMe(5),'Expected 5');
console.log(calculateMe(21),'Expected 3');
console.log(calculateMe(11111),'Expected 5');