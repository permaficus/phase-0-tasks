/**
 * Function maxSum menerima input berupa array berisi integer. 
 * maxSum akan mencari 'pasangan' integer yang akan menghasilkan jumlah terbesar jika
 * keduanya dijumlahkan. Pasangan integer ini tidak boleh terdiri dari integer yang sama ([9,9], [3,3] tidak boleh!)
 * 
 * Output yang diharapkan adalah sebuah array berisi kedua angka tersebut. 
 * Jika input merupakan kumpulan angka yang sama maka output adalah angka tersebut dalam sebuah array. (Ini karena tidak ada pasangan angka di dalam array tersebut).
 * Lihatlah contoh test case untuk lebih jelasnya. Tuliskanlah Pseudocode kalian diatas code tersebut.
 * 
 * Contoh:
 * -Input: [1,2,3]
 * -Output: [2,3]
 * 
 * -Input:[1]
 * -Output[1]
 * 
 * 
 * Rules:
 * -Tulislah Pseudocode diatas Code kalian
 * -Dilarang menggunakan built-in function selain .push()
 * 
 */

//Write pseudocode here
/* SET LABEL CACHE INTO Array
FILTER ARRAY ASC
GET MAX_VALUE & SECOND MAX_VALUE FROM ARRAY
STORE RESULT INTO CACHE
IF FILTER RESULT LENGTH > 2 THEN CACHE.PUSH INDEX 2,3
IF FILTER RESULT LENGTH > 2 THEN DISPLAY CACHE ELSE DISPLAY FILTER(ARRAY)
*/
function maxSum(array) {
    //implementasikan function disini
    let cache = []
    const filter = n => {
        let filt = []
        for (let i=0;i<n.length;i++) {
            if (filt[0] !== n[i]) {
                filt.push(n[i]);
            }
        }
        return filt;
    }
    if (filter(array.length > 2)) cache.push(filter(array)[filter(array).length-2],filter(array)[filter(array).length-1])
    return (filter(array).length > 2) ? cache:filter(array);    
}

console.log(maxSum([1, 3, 5, 1, 9])) //[5,9]
console.log(maxSum([1])) //[1]
console.log(maxSum([5, 5, 5, 4])) //[5,4]
console.log(maxSum([5, 5, 5, 5])) //[5]