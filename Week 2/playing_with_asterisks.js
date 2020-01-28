console.log('=========================================')
console.log("|      START PLAYING WITH ASTERISK      |")
console.log('=========================================')
console.log('\r')

drawAsterisk = (n,lad) => {

    if (n <= 5 && !lad) {
        console.log('*\n'.repeat(n))
    } 

    for (let c=1;c<=n;c++) {
        
        (!lad) ? console.log('*'.repeat(n) + '\r'):
            console.log('*'.repeat(c) + '\r')
    }

}

drawAsterisk(5);
console.log('\r')
drawAsterisk(5,lad=true)

