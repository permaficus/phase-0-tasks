changeVocals = str => {
    // well well well......MAGICAL CODE AGAIN HUH? NO NO NO
    // return str.replace(/([aiueoAIUEO])/g, x => {
    //     return String.fromCharCode(x.charCodeAt()+1);})
    // What is magical mean anyway ? there is no magic here!!!

    let dict = 'abijuvefopABIJUVEFOP', result='';
    for (let c=0;c<str.length;c++) {
        if (['a','i','u','e','o','A','I','U','E','O'].includes(str[c]) ) {
            for (let d=0;d<dict.length;d++) {
                if (str[c] == dict[d]) {
                    result += dict[d+1]
                }
            }
        } else {
            result += str[c];
        }
    }
    return result;

}

reverseWord = str => {
    // return str.split('').reverse().join('');
    let revWord = '';
    for (let i=1;i<=str.length;i++){revWord += str.substr(str.length-i,1)}
    return revWord;
}

setLowerUpperCase = str => {
    // return str.replace(/([a-zA-Z])/g, x => {
    //     return (x.charCodeAt() > 64 && x.charCodeAt()<=90)? x.toLowerCase():x.toUpperCase();
    // })
    let newStr = '';
    for (let i in str) {

        newStr += (str[i] == str[i].toUpperCase()) ? str[i].toLowerCase():str[i].toUpperCase();

    }

    return newStr;
}

removeSpaces = str => {return str.split(' ').join('');}

function passwordGenerator (name) {
    if (name.length < 5) {return 'At least 5 character'}
    name = changeVocals(name);
    name = reverseWord(name);
    name = setLowerUpperCase(name);
    name = removeSpaces(name);

    return name;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'