/**
 * Kalian akan membuat sebuah program yang akan mensimulasikan program yang menghitung ongkos kirim.
 * Input ini merupakan array berisi beberapa string dengan format sebagai berikut:
 * [Nomor Transaksi]-[Nama]-[Asal Pengiriman]-[Tujuan Pengiriman].
 * Kalian harus mengimplementasikan function-function yang terdapat di dalam program ini (ada 5 function).
 * 
 * Asal Pengiriman dan Tujuan pengiriman adalah nama kota yang merepresentasikan asal kota tersebut. 
 * Biaya pengiriman dari 1 kota ke kota lain yang berdekatan (bersebalahan) adalah 20.000
 * Terdapat 5 kota yang memiliki urutan:
 * Jakarta -> Depok -> Bogor -> Tangerang -> Bekasi
 *  
 *  - Jakarta ke Depok memiliki biaya pengiriman 20.000, karena hanya melalui 1 kota
 *  
 * Pengiriman juga bisa berlaku sebaliknya, yaitu pengiriman dari Bekasi -> Tangerang atau Bekasi -> Jakarta. Harganya juga 20.000 per kota.
 * Contoh: 
 *     - Bekasi ke Bogor memiliki biaya pengiriman 40.000, karena melalui 2 kota
 * 
 * Program ini dibagi menjadi 5 fungsi.  Kalian harus mengimplementasikan fungsi-fungsi tersebut. Masing masing function akan memiliki 
 * deskripsi tentang apa fitur yang diperlukan di dalam masing-masing function. 
 *
 * Function `hitungOngkir` merupakan driver function, function tersebut sudah diisi dengan urutan pemanggilan yang diperlukan soal.
 * 
 *  Rules:
 * -Tidak boleh mengubah isi/urutan pemanggilan function yang ada di function hitungOngkir()!
 * -Dilarang menggunakan built-in function selain: .split(), .push(), .sort(), parseInt() dan semua built-in function yang terdapat di Math!
 *
 */

/** 
   Function ini akan menerima input berupa array berisi string transaksi pengiriman barang.
   Function ini akan memisahkan input dengan delimiter '-'. 
   Output dari function ini adalah array multidimensi yang memisahkan string input transaksi tersebut. 
*/
function splitTransactions(array) {
   //implementasikan fungsi ini 
   let cache = [];
   for (let i=0;i<array.length;i++) {
      cache.push(array[i].split('-'));  
   }

   return cache;
}

/*
   Function ini menerima input berupa array multidimensi dari fungsi `splitTransactions`, dan 
   akan mengurutkan array-array di dalamnya dari angka yang paling kecil terlebih dahulu (disebelah kiri)
   Output yang diharapkan adalah sebuah array multidimensi yang terurut
*/
function sortItemsByNumber(array) {
   //implementasikan fungsi ini 
/*    let f = 0;
   for (let min, i=0;i<array.length-1;i++) {
      if (+(array[i][0]) > +(array[i+1][0])) {
         min = array[i+1];array[i+1] = array[i];array[i] = min;f++;
      }
   }

   return (f == 0) ? array:sortItemsByNumber(array) */
   return array.sort((a,b) => a[0] - b[0])
}

/*
   Function ini akan menerima input berupa array multidimensi yang sudah diurutkan dari `SortItemsByNumber`, Ubahlah masing-masing array di dalamnya menjadi object
   Output yang diharapkan dari function ini adalah sebuah array of objects, dimana masing-masing object memiliki format:
   {Number: [Nomor Transaksi], Name: [Nama pengirim], Origin: [Asal pengiriman barang], Destination: [Tujuan pengiriman barang]}
*/
function objectify(items) {
   //implementasikan fungsi ini
   let cache = [] 
   for (let i in items) {
      let obj = {}
      obj.Number = items[i][0];
      obj.Name = items[i][1];
      obj.Origin = items[i][2];
      obj.Destination = items[i][3]
      cache.push(obj)
   }
   return cache;
}


/*
   Function ini akan menerima input berupa array of objects dari function `objectify`. 
   Hitunglah biaya pengiriman dari masing-masing transaksi tersebut.
   Output yang diharapkan adalah sebuah array of objects, dimana masing-masing object memiliki format: 
   {Name: [Nama pengirim], Cost: [Biaya Pengiriman]}. 
 */
function calculatePrice(items) {
   //implementasikan fungsi ini 
   let cache = []
   const cities = ['Jakarta','Depok','Bogor','Tangerang','Bekasi'];

   for (let i in items) {
      let obj = {};
      obj.Name = items[i].Name
      obj.Cost = Math.abs(cities.indexOf(items[i].Destination)-cities.indexOf(items[i].Origin)) * 20000;
      cache.push(obj);
   }

   return cache;
}

/*
   Function ini akan memiliki output berupa array of objects dari function `calculatePrice`. 
   Jangan ubah isi dari function ini
*/
function hitungOngkir(datas) {
   return calculatePrice(objectify(sortItemsByNumber(splitTransactions(datas))))
}

console.log(hitungOngkir(['1-Rafi-Jakarta-Depok', '4-Afif-Bekasi-Tangerang', '3-Rafki-Bogor-Bekasi', '2-Zara-Tangerang-Bekasi']))
/*
 [
  { Name: 'Rafi', Cost: 20000 },
  { Name: 'Zara', Cost: 20000 },
  { Name: 'Rafki', Cost: 40000 },
  { Name: 'Afif', Cost: 20000 }
 ]
*/



