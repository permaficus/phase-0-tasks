/*
Get List Movies
adalah function yang memiliki input array yang merupakan kumpulan array dengan format 
['rating', 'name', 'waktu hitungan jam',  'year']
function ini adalah modular function. bentuk dari function getListMovies DILARANG UNTUK DI UBAH 

Input dari function ini adalah object
yang menggroupkan movies berdasarkan tahunnya dan data movie sudah di sorting berdasarkan rating dan waktu berbentuk menit 

Rules :
Dilang menggunakan built-in function selain .push() 

*/


/* Function converstionTime akan mengubah value waktu dalam kumpulan array menjadi waktu format menit
Ouput array 2D:
[
    [ 8, 'Avatar Eng', 90, 2015 ],
    [ 10, 'Anna & Eli', 150, 2013 ],
    ...
]
*/
function converstionTime(list) {
    // your code here..
    let time = {'1':60,'2':120}

    const split = (target,delimiter) => {
        let [words,result] = ['',[]]
        for (let i=0;i<target.length;i++) {
            if (target[i] !== delimiter) {words+= target[i];} 
            else {result.push(words);words='';}
        }
        result.push(words);
        return result;
    }

    for (let t in list) {
        let ti = split(list[t][2],':')
        list[t][2] = `${time[ti[0]] + +ti[1]} minutes`
    }

    return list;
    
}

/* Function sortByRating akan mengurutkan movies berdasarkan ratingnya secara descanding
ouput berupa array of array
[
    [ 8, 'Avatar Eng', 90, 2015 ],
    [ 10, 'Anna & Eli', 150, 2013 ],
    [ 6, 'Hungry Bird', 120, 2013 ],
    ... 
] 
*/
function sortByRating(list) {
    // your code here..
    let f = 0;
    for (let min=0, l=0;l<list.length-1;l++) {
        if (list[l][0] < list[l+1][0]) { min = list[l];list[l] = list[l+1];list[l+1] = min;f++;}
    }

    return f == 0 ? list:sortByRating(list)
}


/*Function groupByYear akan menggelompokkan data movies berdasarkan tahunnyanya
Ouput berupa object dengan keyname tahun dan value dari tahun adalah array of objects
format object untuk permovienya
{name : '<name>', time: '<time in minute> minutes', rating : '<rating>/10'}
*/
function groupByYear(arr) {
    // your code here..
    let movies = {};
    for (let i in arr) {
        movies[arr[i][3]] = movies[arr[i][3]] || [];
        let obj = {};
        obj.Title = arr[i][1];
        obj.Duration = arr[i][2];
        obj.Ratings = `${arr[i][0]}/10`
        movies[arr[i][3]].push(obj)
        Object.assign(movies)
    }
    return movies
}


/* Function getListMovies akan memberikan data movies yang sudah di arrage tahun dan rating, 
    dan sudah mengkonfersi waktu pada data movie berupa menit. */
function getListMovies(movie) {
    return groupByYear(sortByRating(converstionTime(movie)))
}

var cartoons = [
    [8, 'Avatar Eng', '1:30', 2015],
    [10, 'Anna & Eli', '2:30', 2013],
    [6, 'Hungry Bird', '2:00', 2013],
    [9, 'Lion Kong', '1:20', 2020],
    [5, 'Megomind', '1:15', 2015],
    [6, 'Sonyc', '2:10', 2020],
    [5, 'Zoopio', '1:20', 2015]
]

console.log(getListMovies(cartoons))
/*
{
    '2013': [
        { name: 'Anna & Eli', time: '150 minutes', rating: '10/10' },
        { name: 'Hungry Bird', time: '120 minutes', rating: '6/10' }
    ],
    '2015': [
        { name: 'Avatar Eng', time: '90 minutes', rating: '8/10' },
        { name: 'Megomind', time: '75 minutes', rating: '5/10' },
        { name: 'Zoopio', time: '80 minutes', rating: '5/10' }
    ],
    '2020': [
        { name: 'Lion Kong', time: '80 minutes', rating: '9/10' },
        { name: 'Sonyc', time: '130 minutes', rating: '6/10' }
    ]
}
*/