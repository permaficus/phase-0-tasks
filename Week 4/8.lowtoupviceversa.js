changeCaps = str => {

/*     SHORT VERSION
    return str.replace(/([A-Za-z])/g, a => {
        return (a.charCodeAt() > 64 && a.charCodeAt() <=90)? a.toLowerCase():a.toUpperCase();
    }) */

    // LONG VERSION
    let newStr = '';
    for (let char in str) {

        newStr += (str[char] == str[char].toUpperCase()) ? str[char].toLowerCase()
            :str[char].toUpperCase();

    }

    return newStr;

}

// TEST CASES
console.log(changeCaps('Hello World'), " => hELLO wORLD"); 
console.log(changeCaps('I aM aLAY'), " => i Am Alay");
console.log(changeCaps('My Name is Bond!!')," => mY nAME IS bOND!!"); 
console.log(changeCaps('IT sHOULD bE me')," => it Should Be ME"); 
console.log(changeCaps('001-A-3-5TrdYW')," => 001-a-3-5tRDyw");