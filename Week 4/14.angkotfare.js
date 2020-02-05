angkotFare = data => {

    let route = ['A','B','C','D','E','F'], cacheResult = [];

    const index_Of = target => {
        for (let c=0;c<route.length;c++) {
            if (target == route[c]) {
                return c;
            }
        }
    }

   // return [...Array(data.length)].map((_,a)=> {
    for (let a in data) {
        let ol = {};
        ol.Passenger = data[a][0];
        ol.From = data[a][1];
        ol.To = data[a][2];
        // This one 'asume' to be MAGICAL, ???
        // ol.Fare = (route.indexOf(data[a][2]) - route.indexOf(data[a][1])) * 2000;
        ol.fare = (index_Of(data[a][2]) - index_Of(data[a][1])) * 2000
        // return ol;
        // maybe this one too ?????
        // data.splice(a,1,ol);
        cacheResult.push(ol);
    // })
    }

    return cacheResult;
}

//TEST CASE
console.log(angkotFare([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(angkotFare([])); //[]