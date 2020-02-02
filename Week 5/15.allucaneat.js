ayce = timer => {return (timer <=0) ? 0:ayce(timer - 15) + 1;}
  
// TEST CASES
console.log(ayce(66), 'Expected 5');
console.log(ayce(100),'Expected 7');
console.log(ayce(90),'Expected 6');
console.log(ayce(10),'Expected 1');
console.log(ayce(0),'Expected 0');