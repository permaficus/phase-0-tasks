dataHandling = (data) => {

    let str = ''
    return data.reduce((_,b)=>{
        str += `ID: ${b[0]}\nNama Lengkap: ${b[1]}\nTTL: ${b[2]}, ${b[3]}\nHobby: ${b[4]}\n\n`;
        return str.trim();
    },0)

}

console.log(dataHandling([
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona Ryder", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]));