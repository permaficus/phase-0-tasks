revme = str => {

    let revWord = '';
    for (let i=1;i<=str.length;i++){revWord += str.substr(str.length-i,1)}
    return revWord;

}

console.log(revme('telkomid'));
console.log(revme('kasur rusak'))