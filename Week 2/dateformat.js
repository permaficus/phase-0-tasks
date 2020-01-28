/*  SWITCH - CASE CHALLENGE - WEEK 2 HACKTIV8 */

formatDate = () => {
    let date = 28, month =4, year = 2020, monthDict = ['','Januari','Februari','Maret','April','Mei','Juni'
    ,'Juli','Agustus','September','Oktober','November','Desember'];

    switch (true){
        case (month >=1 && month <= 12) : console.log(`${date} ${monthDict[month]} ${year}`);break;
        default : console.log('Invalid Month');break;
    }
}

formatDate();