angkotFare = data => {

    const route = ['A','B','C','D','E','F'];

   // return [...Array(data.length)].map((_,a)=> {
    for (let a in data) {
        let ol = {};
        ol.Passenger = data[a][0];
        ol.From = data[a][1];
        ol.To = data[a][2];
        ol.Fare = (route.indexOf(data[a][2]) - route.indexOf(data[a][1])) * 2000;
        // return ol;
        data.splice(a,1,ol);
    // })
    }

    return data;
}

//TEST CASE
console.log(angkotFare([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(angkotFare([])); //[]