/**
 * ===========
 * MINE TYCOON
 * ===========
 *
 * Anggap Array 2 dimensi ini adalah sebuah tambang. Row merepresentasikan lantai dari tambang tersebut (dari lantai 0 sampai lantai N kebawah)
 * Tambang ini memiliki 4 mineral yang menjadi kekayaan alam tambang tersebut yaitu:
 *
 * - copper
 * - silver
 * - gold
 * - diamond
 *
 * 'steps' adalah jumlah langkah yang dapat di capai oleh si penambang, untuk menambang di penambangan,
 * lokasi yang sudah di lewati oleh penambang, akan menjadi kosong
 *
 * Jika penambang mendapatkan salah satu dari 4 mineral di atas, maka penambang akan menyimpannya.
 * Function akan mereturn mineral yang pernah di dapatkan oleh si penambang selama menambang.
 *
 * contoh:
 * #mine
 * [
 *  ['#', 'c', 's', '#', '#', '#', '#'],
 *  ['d', '#', 'c', '#', 'd', '#', '#'],
 *  ['#', '#', '#', 'g', '#', '#', '#']
 * ]
 * #steps: 11
 *
 * maka function akan mereturn:
 *  mineral:
 *    [[2, cooper], [1, silver], [1, diamond]]
 *
 * Dan jika variable mine yang di tambang di console.log maka penampakan terakhirnya adalah seperti ini:
 *    [
 *      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
 *      [' ', ' ', ' ', ' ', 'd', '#', '#'],
 *      ['#', '#', '#', 'g', '#', '#', '#']
 *    ]
 *
 * RULES:
 * - Wajib menuliskan Pseudocode!
 * - Dilarang menggunakan built-in function .reduce .filter .map .indexOf .lastIndexOf etc
 *
*/
// SHORT VERSION
mineTycoon = (mine,steps) => {
	let minerals = {'Silver': 's', 'Gold':'g', 'Copper':'c', 'Diamond':'d'}, counter=0, mineCache = []; 
	for (let c in mine) { mine = [].concat.apply([],mine)	}
	return mine.toString().split(',').reduce((a,b)=> {
		counter++
		if (counter <= steps) {
			let ab = Object.keys(minerals).find(el => minerals[el] == b);
			if (ab !== undefined) {
				a[ab] = (a[ab] || 0)+1;
			}
		}
		return a
	},[])
}

// LONG VERSION
function mineTycoon(mine, steps) {
	//implementasi function disini!
	let counter = 0, mineCollection = [], minerals = {'g':'Gold','c':'Copper','d':'Diamond','s':'Silver'};

	const processingCollection = a => {
		let f = 0;
		if (mineCollection.length == 0) {f=0} else {
			for (let i=0;i<mineCollection.length;i++) {
				if (mineCollection[i][1] == a[1]) {
					mineCollection[i][0] += 1;
					f++;
				}
			}
		}
		if (f == 0) {mineCollection.push(a)}
	}
	const sortCollection = n => {
		let f=0;
		for (let min=0,max=0, i=0;i<n.length-1;i++) {
			if (n[i][0] < n[i+1][0]) {
				min=n[i];max=n[i+1];n[i]=max;n[i+1]=min;
				f++
			}
		}

		return (f==0) ? n:sortCollection(n)

	}

	for (let x=0;x<mine.length;x++) {
		for (let y=0;y<mine[x].length;y++) 
		{
			counter++;
			if (counter > steps) {break;}
			(minerals[mine[x][y]] !== undefined) ? processingCollection([1,minerals[mine[x][y]]]):''
			mine[x][y] = ' '
		}
	}

	// console.log(mine)
	return sortCollection(mineCollection);
}

// ALTERNATE VERSION
mineTycoon = (mine,steps) => {

	let collection = [[0,'Copper'],[0,'Silver'],[0,'Gold'],[0,'Diamond']];

	for (let x in mine) {
		for (let y=0;y<mine[x].length;y++) {
			steps--;
			mine[x][y] == 'c' ? collection[0][0]++ : mine[x][y] == 's' ? collection[1][0]++
				: mine[x][y] == 'g' ? collection[2][0]++ : mine[x][y] == 'd' ? collection[3][0]++
				: '';
			mine[x][y] = ' '
			if (steps == 0) {break;}
		}
	}	

	// render dipslay
	let cache = []
	for (let d in collection) {
		if (collection[d][0] !== 0){
			cache.push(collection[d])
		}
	}

	return cache;
}

var mine1 = [
	['#', 'h', 's', '#', '#', '#', 'g'],
	['u', '#', 'c', '#', 'd', '#', '#'],
	['#', '#', '#', '#', '#', '#', '#']
];
console.log(mineTycoon(mine1, 10));
// [[1, copper] [1, silver] [1, gold]]

var mine2 = [
	['#', '#', '#', '#', '#', 'w', '#'],
	['r', '#', 'c', '#', 'd', '#', '#'],
	['#', 't', '#', 'c', '#', '#', '#'],
	['#', '#', 's', 'g', '#', '#', '#'],
	['#', '#', '#', '#', '#', '#', '#']
];
console.log(mineTycoon(mine2, 20));
// [[2, copper], [1, diamond]]

var mine3 = [
	['d', 'c', '#', 's', '#', 'w', '#'],
	['r', 'b', 'c', '#', '#', '#', 'g'],
	['#', 't', '#', 'c', '#', '#', '#'],
	['#', '#', 's', 'g', '#', '#', '#']
];
console.log(mineTycoon(mine3, 94));
// [ [ 3, 'copper' ], [ 2, 'silver' ], [ 2, 'gold' ], [ 1, 'diamond' ] ]