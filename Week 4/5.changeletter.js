changeLetter = str => {

    // SHORT VERSION
    // return str.replace(/([a-z])/g,(char)=>{return (char=='z')? 'a'
    //      :String.fromCharCode(char.charCodeAt()+1)})

    
    // AS INSTRUCTED ON PHASE-0
    let dict = '_abcdefghijklmnopqrstuvwxyz', newStr = '';
    
    for (let i in str) {

        newStr += (dict.indexOf(str[i])>0 && str[i]!== 'z') ? dict[dict.indexOf(str[i])+1]:'a';

    }

    return newStr;


}

// TEST CASES
console.log(changeLetter('wow'), '=> xpx'); 
console.log(changeLetter('developer'), '=> efwfmpqfs'); 
console.log(changeLetter('javascript'), '=> kbwbtdsjqu');
console.log(changeLetter('keren'), '=> lfsfo');
console.log(changeLetter('semangat'), '=> tfnbohbu'); 
console.log(changeLetter('dragonballz'), '=> esbhpocbmma')