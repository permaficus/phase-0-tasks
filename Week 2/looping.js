console.log('=========================================')
console.log("|       1. Using While - Loop           |")
console.log('=========================================')
console.log('\r')

let i = 1, c=21, str='';
while (i<=40){

    str += (i<=1) ? 'LOOPING PERTAMA\n\n':((i>1 && i<21)? `${i}. - I Love Coding\n`
            :((c>20)? '\nLOOPING KEDUA\n\n' : `${c}. - I'll become a full stack developer\n`));
    
    i++;
    if (i>21) {c--}

}

console.log(str)
console.log('=========================================')
console.log("|          2. Using For - Loop          |")
console.log('=========================================')
console.log('\r')

let res = '';
for (let a=21, b=0;b<=41;b++){
    
    
    res += (b==0) ? 'LOOPING PERTAMA\n\n':((b>=1 && b<=20)? `${b}. - I Love Coding\n`
            :((a>20)? '\nLOOPING KEDUA\n\n' : `${a}. - I'll become a full stack developer\n`));

    if (b>20) {a--}
}

console.log(res)
console.log('=========================================')
console.log("|        3. Angka Ganjil & Genap        |")
console.log('=========================================')
console.log('\r')

tryme = (start,end,step) => {

    for (let t=start;t<=end;t+=step) {

        switch (step) {
            case 1: console.log((t%2==0) ? 'GENAP':'GANJIL');break;
            default: if (t%(step+1)==0) {console.log(`${t} KELIPATAN ${step+1}`)}
        }
    }

}
console.log('Start populate Odd & Even Number ...............')
console.log('\r')
tryme(1,100,1);
console.log('\r')
tryme(1,100,2);
console.log('\r')
tryme(1,100,5);
console.log('\r')
tryme(1,100,9);
