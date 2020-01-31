nearestTarget = a => {

    let x = [], o = [], min_ = [a.length]
    if (!a.includes('x') || !a.includes('o')) {return 0;}
    // a.reduce((_,a,i)=>{ (a=='x') ? x.push(i):(a=='o') ? o.push(i):''},0);
    for (let ob in a) {(a[ob]=='x') ? x.push(ob):(a[ob]=='o')? o.push(ob):''}
    // return Math.min(...x.map((_,a)=>{return (x[a]<o[0]) ? o[0]-x[a]:x[a]-o[0]}))
    for (let min=0, c=0;c<=x.length;c++) {
        min = (x[c]<o[0]) ? o[0] - x[c]:x[c]-o[0];
        (min < min_[0]) ? min_[0] = min:0;
    }

    return min_[0];
}

// TEST CASES
console.log(nearestTarget([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x']),3);
console.log(nearestTarget(['o', ' ', ' ', ' ', 'x', 'x', 'x']),4);
console.log(nearestTarget(['x', ' ', ' ', ' ', 'x', 'x', 'o', '']),1);
console.log(nearestTarget([' ', ' ', 'o', ' ']),0);
console.log(nearestTarget([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x']),2);
console.log('\nSTARTING TEST CASE 2 -------------------------------------------\n')
// TEST CASE 2
console.log(nearestTarget([' ', 'x', ' ','o' ,' ', 'x', ' ', ' ', 'x']),2);
console.log(nearestTarget([' ', ' ', ' ', 'x', 'x', 'o', ' ', 'x']),1);
console.log(nearestTarget([' ', 'o', ' ', ' ', 'x', ' ', ' ', 'x']),3);
console.log(nearestTarget([' ', 'x', 'o', '', 'x', ' ', ' ', 'x']),1);
console.log(nearestTarget(['o', ' ', ' ', 'x', 'x', ' ', ' ', 'x']),3);