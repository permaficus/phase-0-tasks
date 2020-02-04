/**
 * Tuliskan ALGORITMA dan PSEUDOCODE Untuk menyelesaikan kasus berikut:
 *
 * Pada tahun 2020, SeaWorld ingin mengganti harga tiketnya. Saat ini, aquarium tersebut memiliki HARGA DASAR dari tiket masuk Rp 25.000.
 * Harga tiket masuk akan disesuaikan dengan umur dan status pelajar dari pengunjung tersebut.
 * Kamu harus membuat program yang akan menghitung harga tiket masuk dari tiap pengunjung. Di program ini nantinya, pengunjung akan menginput NAMA, TAHUN KELAHIRAN,
 * dan STATUS PELAJAR.
 * STATUS PELAJAR bisa diisi: true jika merupakan pelajar
 *                            false jika bukan merupakan pelajar
 *
 * -Umur < 2 tahun: HARGA TIKET GRATIS
 * -Umur 2-10:  Harga tiket seharga HARGA DASAR
 * -Umur 11-18:  Jika bukan pelajar, maka harga adalah harga dasar dikalikan 1.5
 *               Jika pelajar, maka harga adalah harga dasar dikalikan 1.25
 * -Umur 19 keatas: Jika bukan pelajar, harga adalah harga dasar dikalikan 2
 *                  Jika pelajar, maka harga adalah harga dasar dikalikan 1.5
 * -Jika umurnya diatas 120 tahun ATAU dia kelahiran dibawah tahun 1900, maka tampilkan 'Invalid Age' dan hentikan program.
 *
 * Setelah menghitung harga, maka tampilkan NAMA dan HARGA TIKET dari pengunjung tersebut.
 *
 *
 */

// Your algorithm/pseudocode here


fare = (name, dob, status='') => {
    
    status = status.toLowerCase();
    // jika pengunjung tidak melengkapi informasi data maka mohon di isi ulang
    if (!name || !dob || !status) {return 'You must inform your name, DOB and your status'}
    // ambil tahun dari informasi tanggal lahir
    dob = dob.split('/');
    // set label untuk tahun, umur dan HTM
    let nYear = new Date(), today = nYear.getFullYear(dob[2]), visitorAge = today - dob[2],
    fare = 25000;

    // jika umur di atas 120 atau kelahiran di bawah 1900 makan tolak masuk, takut jantungan
    if (visitorAge > 120 || dob[2] <= 1900) { return 'Invalid Age';}

    // free ticket untuk yang umur di bawah 2 tahun
    if (visitorAge < 2) { return 'Free Ticket';}
    
    // umur antara 2 sampai 10 tahun harga sesuai harga dasar
    if (visitorAge >= 2 && visitorAge <= 10) {return `Name : ${name}, Ticket Price : ${fare}`; }

    // code untuk kalkulasi HTM berdasarkan umur dan STATUS
    return (visitorAge >=11 && visitorAge <=18 ) ? ((status == 'PELAJAR') ? `Name : ${name}, Ticket Price : ${fare * 1.25}`
        :`Ticket Price : ${fare * 1.5}`) : ((status=='PELAJAR') ? `Name : ${name}, Ticket Price : ${fare * 1.5}` : `Name : ${name}, Ticket Price : ${fare * 2}`)

    
 
}

console.log(fare('Boomerang', '21/01/1980', 'GENERAL'));
console.log(fare('Bambang Gentolet', '21/01/1930', 'PELAJAR'));
console.log(fare('Doraemon', '21/01/1970', 'BPJS'));
console.log(fare('Dori the Fish', '21/01/1999', 'PELAJAR'));
console.log(fare('Dori the Fish', 'PELAJAR'));

