dataHandling = data => {

    let monthDict = ['','Januari','Februari','Maret','April','Mei','Juni'
    ,'Juli','Agustus','September','Oktober','November','Desember'];

    data.splice(1,1,'Roman Alamsyah Elsahrawy');
    data.splice(4,1,'Pria','SMA International Metro');
    console.log(data);
    let dob = data[3].split('/');
    
    // as instructed
    switch (true) {
        case (+dob[1] >= 1 && +dob[1] <= 12): console.log(monthDict[+dob[1]]);break;
        default: "Invalid Data"
    }

    console.log(dob.sort((prev,curr)=>curr-prev));
    console.log(data[3].split('/').join('-'));
    console.log((data[1].length>5) ? data[1].slice(0,15):data[1]);

    return '\nFINISH!'

}

console.log(dataHandling(["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]))