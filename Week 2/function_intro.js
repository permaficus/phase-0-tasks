/*---------------------------------------------------------------*/
//      GLOBAL VARIABLE                 
var num1 = 5, num2 = 6, name = "Agus", age = 30, 
address = "Jln. Malioboro, Yogjakarta", hobby = "gaming";
/*---------------------------------------------------------------*/

shoutOut = () => 'Halo Function!';
console.log(shoutOut()) // Menampilkan "Halo Function!" di console


calculateMultiply = () => num1 * num2;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30

processSentence = () => `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`;

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"