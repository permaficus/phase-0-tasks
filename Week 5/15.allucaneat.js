allYouCanEat = timer => {return (timer <=0) ? 0:allYouCanEat(timer - 15) + 1;}
  
// TEST CASES
console.log(allYouCanEat(66), 'Expected 5');
console.log(allYouCanEat(100),'Expected 7');
console.log(allYouCanEat(90),'Expected 6');
console.log(allYouCanEat(10),'Expected 1');
console.log(allYouCanEat(0),'Expected 0');