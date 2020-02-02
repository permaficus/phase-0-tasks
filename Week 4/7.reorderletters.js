reorder = str => {

    let letters = 'abcdefghijklmnopqrstuvwxyz', newStr ='', char = [];

    //SHORT VERSION
    // return str.split('').sort().join('');


    // FIRST LONG VERSION
  
    // for (let i = 0; i < letters.length; i++) {
    //   for (let n = 0; n < str.length; n++) {
    //     if (letters[i] === str[n]) {
    //       newStr += letters[i];
    //     }
    //   }
    // }
  
    // return newStr;

    // should we try the longer version ?

    // 2nd LONG VENISONNNN......VERSION!

    // .SPLIT()
    for (let c=0;c<str.length;c++){char.push(str[c].charCodeAt());}
    
    // .SORT() 
    const sorting = n => {
        let f = 0;
        for (let min=0, max=0, c=0;c<n.length;c++){ if (n[c]>n[c+1]) { min = n[c+1];
            max = n[c]; n[c]=min; n[c+1]=max; f++}}
        return (f==0) ? n:sorting(n);
    }

    char = sorting(char);
    
    // sorting is done, now lets get partaaayyy
    // .JOIN()
    for (let n in char){
        newStr += String.fromCharCode(char[n])
    }
    // done!
    return newStr;

}

// TEST CASES
console.log(reorder('hello')); // 'ehllo'
console.log(reorder('truncate')); // 'acenrttu'
console.log(reorder('developer')); // 'deeeloprv'
console.log(reorder('software')); // 'aeforstw'
console.log(reorder('aegis')); // 'aegis'