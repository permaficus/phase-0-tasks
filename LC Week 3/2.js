/**
 * Seseorang akan mendaftar paket Indiehome terbaru. Buatlah program untuk menghitung harganya. Untuk mendaftar, dia perlu menyertakan nama, nomor ktp, alamat, serta jenis rumah.
 * Jika nama tidak diisi, program akan mengoutput 'NAMA HARUS DIISI!'.
 * - Jika panjang nomor KTP dibawah 4 angka atau nomor KTP tidak diisi, maka keluarkanlah output
 * 'NOMOR KTP TIDAK VALID'.
 * - Untuk soal ini, terdapat 4 lokasi alamat: 'Jakarta', 'Surabaya', 'Yogyakarta', dan 'Bandung'. Selain keempat alamat tersebut, maka program akan mengeluarkan
 * 'Alamat tidak diketahui'. Saat kalian membuat program, jangan lupa untuk menangani kasus-kasus input kota yang tidak ada dalam daftar.
 * Masing-masing lokasi memiliki harga dasar paket yang berbeda:
 *     - Jakarta   100000
 *     - Surabaya   50000
 *     - Yogyakarta 45000
 *     - Bandung    90000
 * -Jenis rumah ada 3 macam: 'normal', 'large', 'kosan'. Jika jenis rumah tidak ada di dalam ketiga rumah tersebut, program akan mengeluarkan output 'Jenis rumah salah'
 * Masing-masing jenis rumah akan mendapatkan biaya yang berbeda-beda. Namun, jika jenis rumah adalah 'kosan' maka tidak boleh mendaftar ke program ini.
 *     - Biaya 'normal': 30000
 *     - Biaya 'large' : 50000
 * Buatlah program yang akan menghitung biaya total dari paket Indiehome tersebut. Program tersebut akan mengoutput:
 * 'NAMA_PENDAFTAR NO_KTP TOTAL_BIAYA'
 * contoh: 'Rani 10049581293 500000'
 *
 * RULES :
 * - DILARANG MENGGUNAKAN BUILT-IN FUNCTION / METHODS
 * - HANYA diperbolehkan untuk mengambil properties .length dari String
 *
 */

var name = 'Pangeran Antasari' // silakan berikan nilai bebas
var nomor_ktp = '1293474937494784' //silahkan berikan nilai bebas
var alamat = 'Surabaya' // bisa diisi dengan alamat Jakarta atau Surabaya atau Yogyakarta atau Bandung selain alamat tersebut silahkan keluarkan output seperti yang diminta
var jenis_rumah = 'normal' //bisa diisi dengan 3 jenis rumah normal atau large atau kosan selain jenis rumah tersebut silahkan keluarkan output seperti yang diminta

//tulislah kode disini

indieHome = () => {

    if (!name) {return 'Mohon nama diisi;'}
    if (nomor_ktp.length < 4 || !nomor_ktp) { return 'NO KTP TIDAK VALID';}

    switch (alamat) {

        case 'Jakarta': return (jenis_rumah=='normal') ? `${name} ${nomor_ktp} ${30000 + 100000}`: ((jenis_rumah == 'large') ? `${name} ${nomor_ktp} ${50000 + 100000}`
            : `Tipe : ${jenis_rumah} tidak bisa mendaftar`)
        case 'Surabaya': return (jenis_rumah=='normal') ? `${name} ${nomor_ktp} ${30000 + 50000}`: ((jenis_rumah == 'large') ? `${name} ${nomor_ktp} ${50000 + 50000}`
            : `Tipe : ${jenis_rumah} tidak bisa mendaftar`)
        case 'Yogjakarta': return (jenis_rumah=='normal') ? `${name} ${nomor_ktp} ${30000 + 45000}`: ((jenis_rumah == 'large') ? `${name} ${nomor_ktp} ${50000 + 45000}`
            : `Tipe : ${jenis_rumah} tidak bisa mendaftar`)
        case 'Bandung': return (jenis_rumah=='normal') ? `${name} ${nomor_ktp} ${30000 + 90000}`: ((jenis_rumah == 'large') ? `${name} ${nomor_ktp} ${50000 + 90000}`
            : `Tipe : ${jenis_rumah} tidak bisa mendaftar`)
    }


    
}

console.log(indieHome())