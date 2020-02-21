/*
GET TEMAN
function getTeman menerima 2 paramater yang pertama adalah array of strings dan yg ke 
parameter kedua adalah string.
function ini akan mencari teman yang memiliki nomer indonesia dan gendernya laki-laki

Rules: 
 Dilarang menggunakan built-in function selain .push()
*/

function getTeman(data, template) {
    // your code here..
    const split = (string,target) => {
        let [words,cache] = ['',[]];
        for (let char in string) {
            if (string[char] !== target) {words += string[char];}
            else {cache.push(words);words=''}
        }
        cache.push(words);
        return cache;
    }

    let result = [];

    for (let person in datas) {
        let p = split(datas[person],',');
        if (p[2] == 'Male' && split(p[3],'-')[0] == '+62') {
            let contact = {}
            contact.FullName = `${p[0]} ${p[1]}`;
            contact.Gender = p[2];
            contact.PhoneNumber = p[3]
            result.push(contact)
        }
    }

    return result;
}

const datas = [
    "Claudette,Dreng,Female,+63-952-343-8477",
    "Wilton,Jarville,Male,+62-388-568-9918",
    "Cosette,Jachimczak,Female,+351-759-588-8682",
    "Verne,Antunes,Male,+62-459-995-2535"
]


console.log(getTeman(datas, "firstName,lastName,gender,phone"))
// [
//     {
//       fullName: 'Wilton Jarville',
//       gender: 'Male',
//       phone: '+62-388-568-9918'
//     },
//     {
//       fullName: 'Verne Antunes',
//       gender: 'Male',
//       phone: '+62-459-995-2535'
//     }
// ]