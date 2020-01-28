minuteToHour = (min) => {

    let hour = Math.floor((min/60));
    min = Math.floor((min % 60));
    return `${hour}:` + ((min <10) ? `0${min}`:min);

}
// TEST CASES
console.log(minuteToHour(63)); // 1:03
console.log(minuteToHour(124)); // 2:04
console.log(minuteToHour(53)); // 0:53
console.log(minuteToHour(88)); // 1:28
console.log(minuteToHour(120)); // 2:00