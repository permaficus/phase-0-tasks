findSuspect = str => {return str.match(/abc/g).length;}


// TEST CASES
console.log(findSuspect('mabcvabc'), 'Expected 2');
console.log(findSuspect('abcdabdc'), 'Expected 1');
console.log(findSuspect('bcabcac'), 'Expected 1');
console.log(findSuspect('abcabcabc'), 'Expected 3');
console.log(findSuspect('babcbacabc'), 'Expected 2');