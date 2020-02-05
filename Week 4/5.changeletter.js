changeLetter = str => {

    // SHORT VERSION
    // return str.replace(/([a-z])/g,(char)=>{return (char=='z')? 'a'
    //      :String.fromCharCode(char.charCodeAt()+1)})

    let dict = 'abcdefghijklmnopqrstuvwxyz', newStr = '';
    
    // 1st Solution
    // for (let i in str) {

    //     newStr += (dict.indexOf(str[i])>0 && str[i]!== 'z') ? dict[dict.indexOf(str[i])+1]:'a';

    // }

    // 2nd & naive solution

    for (let i=0;i<str.length;i++) {
        for (let c=0;c<dict.length;c++) {
            newStr += (str[i]=='z') ? 'a':((str[i]==dict[c]) ? dict[c+1]:'')
        }
    }
    return newStr;


}

// TEST CASES
console.log(changeLetter('wow'), '=> xpx'); 
console.log(changeLetter('developer'), '=> efwfmpqfs'); 
console.log(changeLetter('javascript'), '=> kbwbtdsjqu');
console.log(changeLetter('keren'), '=> lfsfo');
console.log(changeLetter('semangat'), '=> tfnbohbu');
console.log(changeLetter('naive'), '=> objwf')