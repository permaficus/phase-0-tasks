changeVocals = str => {
    return str.replace(/([aiueoAIUEO])/g, x => {
        return String.fromCharCode(x.charCodeAt()+1);})
}

reverseWord = str => {return str.split('').reverse().join('');}

setLowerUpperCase = str => {
    return str.replace(/([a-zA-Z])/g, x => {
        return (x.charCodeAt() > 64 && x.charCodeAt()<=90)? x.toLowerCase():x.toUpperCase();
    })
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