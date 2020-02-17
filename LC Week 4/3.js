/**
Reverse Image 

Diberikan sebuah array 2 dimensi yang berisi angka. Tugas kalian adalah mengubah isi dari elemen-elemen array tersebut.
Yang harus diubah ada 3 hal:
1. Urutan dari array di dalam array-2-dimensi harus dibalik, jadi array di paling akhir harus ditaruh di paling awal.
2. Urutan dari item di dalam array harus diubah urutannya, jadi item yang berada di paling kanan akan berada di paling kiri.
3. Jika ada angka 0 pada index tersebut, maka angka tersebut harus ditukar dengan angka 1 dan begitu juga sebaliknya

Lihatlah test-case untuk contoh kasus

RULES:
-Dilarang menggunakan built-in function selain .push()

*/
  
function reverse(arr){
    //implementasi function disini 

    const sort = data => {
      let f = 0;
      for (let x=0;x<data.length;x++) {
          for (let max =0, y=0;y<data[x].length;y++) {
            if (data[x][y] < data[x][y+1]) {
              max = data[x][y+1];data[x][y+1] = data[x][y];data[x][y] = max;f++
            }
          }
      }
      return (f==0) ? data:sort(data);
    }

    for (let id, i=0;i<arr.length;i++) {
      if (i == 0) {id=arr[i]}
      if (i == arr.length-1) {arr[0] = arr[i];arr[i]=id}
    }   

    arr = sort(arr);

    for (let x=0;x<arr.length;x++){
      for (let id, y=0;y<arr[x].length;y++){
        arr[x][y] = (arr[x][y] == 1) ? 0: (arr[x][y] == 0) ? 1:arr[x][y]
      }
    }

    return arr;
}


console.log(reverse(
    [[1, 2, 3],
    [0, 1, 5],
    [0, 3, 1]]));
/**
[ [ 0, 3, 1 ], 
  [ 5, 0, 1 ], 
  [ 3, 2, 0 ] ]
 */

console.log(reverse([[1,2,3],[4,5,6],[7,8,9]])); 
/*
[ [ 9, 8, 7 ], 
  [ 6, 5, 4 ], 
  [ 3, 2, 0 ] ] */

console.log(reverse([[1,2,3,4], [0,1,2,3,4], [0,0,1,3,4], [1,3,4,5,6,7,8]]))
/*
[
  [ 8, 7, 6, 5,
    4, 3, 0 ],
  [ 4, 3, 0, 1, 1 ],
  [ 4, 3, 2, 0, 1 ],
  [ 4, 3, 2, 0 ]
]
*/

console.log(reverse([])); //[]